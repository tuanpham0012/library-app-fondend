<template lang="">
  <div>
    <div class="wrapper" :class="{ active: active }">
      <div class="select-btn" @click="toggleActive()">
        <span>{{ selectValue }}</span>
        <i class="pe-7s-angle-up" aria-hidden="true"></i>
      </div>
      <div class="content active">
        <div class="search">
          <i class="pe-7s-search"></i>
          <input spellcheck="false" type="text" v-model="search" placeholder="Tìm kiếm..." />
        </div>
        <ul class="options" v-if="result != null && result.length > 0">
          <li
            v-for="(item, index) in result"
            :key="index"
            :class="{ 'selected': index == indexValue || ( defaultValue != null && item[fieldValue ?? fieldSelect].toLowerCase() == defaultValue.toLowerCase()) }"
            @click="selected(item[fieldValue ?? fieldSelect], index)"
          >
            {{ item[fieldSelect] }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount, watch } from "vue";
import axios from "../../stores/axios-config";

const selectValue = ref(props.placeholder);
const indexValue = ref(-1);
const search = ref('');
const result = ref(props.listData);
const defaultValue = ref(props.defaultValueProps);

const props = defineProps({
  listData:{
    type: Array,
    default: function(){
      return null;
    }
  },
  fieldSelect:{
    type: String,
  },
  fieldValue:{
    type: String,
    default: null
  },
  defaultValueProps:{
    type: String,
    default: null,
  },
  placeholder:{
    type: String,
  }
}
)

const emit = defineEmits(['update:modelValue']);

const selected = (value, index) => {
  selectValue.value = value;
  indexValue.value = index;
  active.value = !active.value;
  defaultValue.value = null;
};

watch(selectValue , (newQuestion, oldQuestion) =>{
  emit('update:modelValue', selectValue.value)
})

watch(search, () => {
  result.value = props.listData.filter( (item) => item[props.fieldSelect].toLowerCase().includes(search.value.toLowerCase()));
  console.log(result.value);
})

onBeforeMount(() => {
  
});

const active = ref(false);
const toggleActive = () => (active.value = !active.value);
</script>
<style scoped>
/* Import Google Font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::selection {
  color: #fff;
  background: #4285f4;
}
.wrapper {
  /* width: 30rem; */
  min-height: auto;
  height: auto;
  position: relative;
}
.select-btn,
li {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.active .select-btn{
  border-radius: 5px 5px 0 0;
}
.select-btn {
  height: 40px;
  padding: 0 1.3rem;
  font-size: 1.175rem;
  color: #4e4e4e;
  background: #fcfafa;
  border-radius: 5px;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.active .select-btn{
  color: #000000;
  background: rgb(255, 255, 255);
  border: 1px solid #979797;
}
.select-btn i {
  font-size: 31px;
  transition: transform 0.3s linear;
}
.wrapper.active .select-btn i {
  transform: rotate(-180deg);
}
.content {
  display: none;
  padding: 0.785rem;
  min-width: 100%;
  margin-top: 0;
  background: #fff;
  border-radius: 0 0 5px 5px;
  border: 1px solid #999999;
  border-top: 0;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  position: absolute;
  z-index: 2;
}
.wrapper.active .content {
  padding: 0.785rem !important;
  display: block;
}
.content .search {
  position: relative;
}
.search i {
  top: 50%;
  left: 15px;
  color: #999;
  font-size: 20px;
  pointer-events: none;
  transform: translateY(-50%);
  position: absolute;
}
.search input {
  height: 3rem;
  width: 100%;
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  padding: 0 1rem 0 3.5rem;
  border: 1px solid #b3b3b3;
}
.search input:focus {
  padding-left: 3.5rem;
  border: 2px solid #4285f4;
}
.search input::placeholder {
  color: #bfbfbf;
}
.content .options {
  margin-top: 10px;
  max-height: 200px;
  overflow-y: auto;
  padding-right: 7px;
}
.options::-webkit-scrollbar {
  width: 7px;
}
.options::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 25px;
}
.options::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}
.options::-webkit-scrollbar-thumb:hover {
  background: #b3b3b3;
}
.options li {
  height: 3.75rem;
  padding: 0 0.875rem;
  font-size: 1.375rem;
  border-bottom: 1px solid #b9b9b9;
}
.options li:hover {
  border-radius: 2px;
  background: #96b5f8;
  color: #fffefe;
}
.options li.selected {
  border-radius: 2px;
  background: #5f7cff;
  color: #fffefe;
}
</style>
