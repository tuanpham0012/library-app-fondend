<template>
    <input
      class="form-control"
      :class="{ 'error' : props.error != null }"
      :value="props.modelValue"
      @input="onChanged"
      :placeholder="placeholder"
      type="date"
    />
    <div v-if="props.error !== null">
    <label class="error" v-for="(item, index) in props.error" :key="index"
    >{{ item }}</label
  >
  </div>
  </template>
  <script setup>
  import { ref } from "vue";
  import moment from 'moment';
  const props = defineProps({
    error: {
      type: [String, Number, Array],
      default: null,
    },
    placeholder: {
      type: [String],
      default: null,
    },
    modelValue: {
      type: [String, Number],
      default:function(){
        return moment().format();
      }
    },
  });
  
  const emit = defineEmits(["update:modelValue"]);
  
  const onChanged = (e) => {
      emit('update:modelValue', e.currentTarget.value)
  }
  </script>
  <style scoped>
.error{
  font-weight: 500;
  font-size: 1em;
  color: rgb(255, 2, 2);
}</style>
  