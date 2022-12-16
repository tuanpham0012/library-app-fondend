<template>
  <!-- <div
    class="modal fade"
    id="myModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="myModalLabel">{{ title }}</h5>
        </div>
        <div class="modal-body">
            <slot name="body"></slot>
        </div>
        <div class="modal-footer">
            <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div> -->
  <div
    class="modal show"
    tabindex=""
    aria-labelledby="exampleModalLiveLabel"
    aria-modal="true"
    role="dialog"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title" id="exampleModalLiveLabel">{{ title }}</p>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          
          <slot name="footer"></slot>
          <button
        type="button"
        class="btn btn-default btn-simple"
        data-dismiss="modal"
        @click="closeModal()"
      >
        Close
      </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  size: String,
  title: String,
});
const emits = defineEmits(['close-modal'])
const closeModal = () => {
  console.log('toggle close');
  emits('close-modal');
}
</script>
<style scoped>

</style>
