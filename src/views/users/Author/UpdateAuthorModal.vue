<template>
    <modal title="Thêm mới Tác giả" @close-modal="closeModal()">
      <template v-slot:body v-if="author">
        <div class="col-md-4">
          <input type="file" id="image" name="image" style="display:none" accept="image/jpeg" @change="uploadImage($event)" />
          <div class="avatar">
            <label class="image-preview" for="image">
              <img :src="previewImage ?? author.image"  class="upload-avatar"/>
            </label>
          </div>
          
        </div>
        <div class="col-md-8">
          <div class="card">
            <form
              id="allInputsFormValidation"
              class="form-horizontal"
              action=""
              method="post"
              novalidate=""
            >
              <div class="content">
                <fieldset>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Mã</label>
                    <div class="col-sm-9">
                      <Input
                        :error="error.code"
                        v-model="author.code"
                        placeholder="Mã tác giả"
                      />
                    </div>
                  </div>
                </fieldset>
  
                <fieldset>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Tên tác giả</label>
                    <div class="col-sm-9">
                      <Input
                        :error="error.name"
                        v-model="author.name"
                        placeholder="Tên tác giả"
                      />
                    </div>
                  </div>
                </fieldset>
  
                <fieldset>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Ngày sinh</label>
                    <div class="col-sm-9">
                      <InputDate
                        :error="error.date_of_birth"
                        v-model="author.date_of_birth"
                      />
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Quốc gia</label>
                    <div
                      class="col-sm-9"
                      v-if="countries && countries.data.length > 0"
                    >
                      <select-search-vue
                        :listData="countries.data"
                        fieldSelect="name"
                        defaultValueProps="author.country"
                        v-model="author.country"
                      ></select-search-vue>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Giới thiệu</label>
                    <div class="col-sm-9">
                      <TextArea
                        :error="error.story"
                        v-model="author.story"
                      />
                    </div>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-success btn-fill" @click="save()">
          Thêm
        </button>
      </template>
    </modal>
  </template>
  <script setup>
  import Modal from "../../../components/Modals/BaseModal.vue";
  import Input from "../../../components/Inputs/ValidateInput.vue";
  import InputDate from "../../../components/Inputs/ValidateInputDate.vue";
  import SelectSearchVue from "../../../components/Selects/SelectSearch.vue";
  import TextArea from "../../../components/Inputs/TextAreaInput.vue";
  import { ref, reactive, onBeforeMount, computed, watch } from "vue";
  import { useStore } from "vuex";
  import moment from "moment";
  import axios from "../../../stores/axios-config";
  import { url_author } from "../../../stores/url-config";

  const props = defineProps({
    id: {
        type: [String, Number],
    }
  })
  
  const emits = defineEmits(['close-modal', 'update-data']);
  
  const store = useStore();
  
  const countries = computed(() => store.state.user.countries ?? null);
  
  const author = computed(() => store.state.user.author ?? null);
  
  const error = reactive({
    code: null,
    name: null,
    date_of_birth: null,
    country: null,
    story: null,
    image: null,
  });
  
  const previewImage = ref(null);
  const dataImage = new FormData();
  
  const closeModal = () => {
    emits('close-modal');
  }
  
  const uploadImage = (e) =>{
                  const image = e.target.files[0];
                  const newFileName = Date.now() + '_' + image.name;
                  const reader = new FileReader();
                  reader.readAsDataURL(image);
                  reader.onload = e =>{
                      previewImage.value = e.target.result;
                      console.log(image.name);
                  };
                  author.image = image.name;
                  dataImage.append('image', image, newFileName);
                  console.log(dataImage.get('image'));
              }
  
  const save = async () => {
    
    //author.date_of_birth = moment(author.date_of_birth, "YYYY-MM-DD").format('DD/MM/YYYY');
    console.log(author);
    store.commit('user/SET_LOADING_STATE', true);
    await axios({
      url: url_author.RESOURCE,
      method: "POST",
      data: {
        code: author.code,
        name: author.name,
        date_of_birth: moment(author.date_of_birth, "YYYY-MM-DD").format(
          "DD/MM/YYYY"
        ),
        country: author.country,
        story: author.story,
        image: author.image,
      },
    })
      .then((res) => {
        console.log(res);
        resetValue();
        new Notify({
          title: "",
          text: res.data.message,
          autoclose: true,
          autotimeout: 3000,
          status: "success",
        });
        store.commit('user/SET_LOADING_STATE', true);
        emits('update-data');
        saveImage();
        emits('close-modal');
        
      })
      .catch((err) => {
        console.log(err);
        error.code = err.response.data.errors.code ?? null;
        error.name = err.response.data.errors.name ?? null;
        error.date_of_birth = err.response.data.errors.date_of_birth ?? null;
        error.country = err.response.data.errors.country ?? null;
        error.story = err.response.data.errors.story ?? null;
        error.image = err.response.data.errors.image ?? null;
        store.commit('user/SET_LOADING_STATE', true);
      });
  };
  
  const saveImage = async() => {
    console.log(dataImage.get('image'));
    await axios({
      url : url_author.UPLOAD_FILE,
      headers: {
        'content-type': 'multipart/form-data',
      },
      method: 'POST',
      data: dataImage,
    }).then( res => {
      console.log(res.data);
      console.log('upload file success....');
    }).catch( err => {
      console.log('upload file error....');
      console.log(err);
    })
  }
  
  const resetValue = () => {
    // author = {
    //   code: "",
    //   name: "",
    //   date_of_birth: moment().subtract(20, "years").format("YYYY-MM-DD"),
    //   country: "Vietnam",
    //   story: "",
    //   image: "",
    // };
    error.code =  null;
      error.name = null;
      error.date_of_birth = null;
      error.country = null;
      error.story = null;
      error.image = null;
  };
  
  const getListCountries = () => store.dispatch("user/getListCountries");

  const getAuthor = () => store.dispatch('user/getAuthor', {id: props.id});
  
  onBeforeMount(async () => {
    await getListCountries();
    await getAuthor();
  });
  </script>
  <style scoped>
  .upload-avatar{
    max-width: 17rem;
    max-height: auto;
  }
  .avatar {
    border: 0;
    height: 20rem;
    display: flex;
    align-content: center;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
  .image-preview img{
    cursor: pointer;
    border-radius: 3px;
  }
  </style>
  