<template lang="">
    <div>
        <div class="wrapper" :class="{ 'active' : active}" @click="toggleActive()">
      <div class="select-btn">
        <span>{{ selectValue }}</span>
        <i class="uil uil-angle-down"></i>
      </div>
      <div class="content active">
        <div class="search">
          <i class="uil uil-search"></i>
          <input spellcheck="false" type="text" placeholder="Search">
        </div>
            <ul class="options" v-if="api != null && api.length > 0">
                <li v-for="(item, index) in api" :key="index" :class="{'selected' : index == indexValue}" @click = "selected(item.book_name,index)">{{item.book_name}}</li>
            </ul>
      </div>
    </div>
    </div>
</template>
<script setup>
import {ref, onBeforeMount} from 'vue'
import axios from '../../stores/axios-config';
const selectValue = ref('Chọn');
const indexValue = ref(-1);
const selected = (value, index) => {
    selectValue.value = value;
    indexValue.value = index;
}
const api = ref(null);
onBeforeMount( () => {
    axios({
        url: 'https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10',
        'method': 'GET'
    }).then( res => {
        api.value = res.data.verses;
        console.log(res.data.verses);
    }).catch( err => {
        console.log(err);
    })
})

const active = ref(false);
const toggleActive = () => active.value = !active.value;
</script>
<style scoped>
    /* Import Google Font - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

::selection{
  color: #fff;
  background: #4285f4;
}
.wrapper{
  width: 370px;
  margin: 85px auto 0;
}
.select-btn, li{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.select-btn{
  height: 65px;
  padding: 0 20px;
  font-size: 22px;
  background: #fff;
  border-radius: 7px;
  justify-content: space-between;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
.select-btn i{
  font-size: 31px;
  transition: transform 0.3s linear;
}
.wrapper.active .select-btn i{
  transform: rotate(-180deg);
}
.content{
  display: none;
  padding: 20px;
  margin-top: 15px;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
.wrapper.active .content{
  display: block;
}
.content .search{
  position: relative;
}
.search i{
  top: 50%;
  left: 15px;
  color: #999;
  font-size: 20px;
  pointer-events: none;
  transform: translateY(-50%);
  position: absolute;
}
.search input{
  height: 50px;
  width: 100%;
  outline: none;
  font-size: 17px;
  border-radius: 5px;
  padding: 0 20px 0 43px;
  border: 1px solid #B3B3B3;
}
.search input:focus{
  padding-left: 42px;
  border: 2px solid #4285f4;
}
.search input::placeholder{
  color: #bfbfbf;
}
.content .options{
  margin-top: 10px;
  max-height: 250px;
  overflow-y: auto;
  padding-right: 7px;
}
.options::-webkit-scrollbar{
  width: 7px;
}
.options::-webkit-scrollbar-track{
  background: #f1f1f1;
  border-radius: 25px;
}
.options::-webkit-scrollbar-thumb{
  background: #ccc;
  border-radius: 25px;
}
.options::-webkit-scrollbar-thumb:hover{
  background: #b3b3b3;
}
.options li{
  height: 50px;
  padding: 0 13px;
  font-size: 21px;
}
.options li:hover, li.selected{
  border-radius: 5px;
  background: #f2f2f2;
}
</style>