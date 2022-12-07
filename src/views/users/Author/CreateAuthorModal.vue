<template>
  <modal title="Thêm mới Tác giả">
    <template v-slot:body>
      <div class="col-md-12">
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
                  <div class="col-sm-9" v-if="(countries && countries.data.length > 0)">
                    <select-search-vue
                      :listData="countries.data"
                      fieldSelect="name"
                      defaultValueProps="author.country"
                      v-model="author.country"
                    ></select-search-vue>
                  </div>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <button
        type="button"
        class="btn btn-default btn-simple"
        data-dismiss="modal"
      >
        Close
      </button>
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
import { ref, reactive, onBeforeMount, computed, watch } from "vue";
import { useStore } from "vuex";
import moment from "moment";
import axios from '../../../stores/axios-config';
import { url_author } from '../../../stores/url-config'

const store = useStore();

const countries = computed(() => store.state.user.countries ?? null);

const author = reactive({
  code: "",
  name: "",
  date_of_birth: moment().subtract(20, "years").format("YYYY-MM-DD"),
  country: "Vietnam",
  story: "",
  image: "",
});

const error = reactive({
  code: null,
  name: null,
  date_of_birth: null,
  country: null,
  story: null,
  image: null,
});

const save = async() => {
    console.log(author);
        // await axios({
        //     url: url_author.RESOURCE,
        //     method: 'POST',
        //     data: author,
        // }).then( res => {
        //     console.log(res.data);
        // }).catch((err) => {
        // console.log(err);
        // });
}

const getListCountries = () => store.dispatch("user/getListCountries");

onBeforeMount( async () => {
  await getListCountries();
})

</script>
<style lang=""></style>
