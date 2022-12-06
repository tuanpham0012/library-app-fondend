<template>
  <div class="wrapper">
    <side-bar></side-bar>
    <div class="main-panel">
      <nav-bar></nav-bar>
      <loading v-if="loading"></loading>
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>
import SideBar from "../../components/Layouts/SideBar1.vue";
import NavBar from "../../components/Layouts/NavBar.vue";
import Loading from "../../components/LoadingScreens/Loading1.vue";

import { computed} from 'vue';
import { useStore} from 'vuex';

const store = useStore();

const loading = computed( () => store.state.user.loading ?? true);

</script>
<style></style>
