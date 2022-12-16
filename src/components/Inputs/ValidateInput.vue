<template>
  <input
    class="form-control"
    :class="{ 'error' : props.error != null }"
    :value="props.modelValue"
    @input="onChanged"
    :placeholder="placeholder"
    type="text"
    required="true"
    autocomplete="off"
    aria-required="true"
    aria-invalid="true"
  />
  <div v-if="props.error !== null">
    <label class="error" v-for="(item, index) in props.error" :key="index"
    >{{ item }}</label
  >
  </div>
  
</template>
<script setup>
import { ref } from "vue";
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
}
</style>
