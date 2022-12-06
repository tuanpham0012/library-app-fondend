<template>
    <input
      class="form-control"
      :class="{ 'error' : props.error != null }"
      :value="props.modelValue"
      @input="onChanged"
      :placeholder="placeholder"
      type="date"
    />
    <label v-if="props.error !== null" class="error" for="email"
      >{{ props.error }}</label
    >
  </template>
  <script setup>
  import { ref } from "vue";
  import moment from 'moment';
  const props = defineProps({
    error: {
      type: [String, Number],
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
  <style lang=""></style>
  