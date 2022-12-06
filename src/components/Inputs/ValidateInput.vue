<template>
  <input
    class="form-control"
    :class="{ 'error' : props.error != null }"
    :value="props.modelValue"
    @input="onChanged"
    :placeholder="placeholder"
    name="email"
    type="text"
    required="true"
    autocomplete="off"
    aria-required="true"
    aria-invalid="true"
  />
  <label v-if="props.error !== null" class="error" for="email"
    >{{ props.error }}</label
  >
</template>
<script setup>
import { ref } from "vue";
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
  },
});

const emit = defineEmits(["update:modelValue"]);

const onChanged = (e) => {
    emit('update:modelValue', e.currentTarget.value)
}
</script>
<style lang=""></style>
