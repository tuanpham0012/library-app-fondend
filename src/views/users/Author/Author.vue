<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card">
            <div class="content table-responsive table-full-width">
              <div id="datatables_filter" class="dataTables_filter">
                <label
                  ><input
                    type="search"
                    class="form-control input-sm"
                    placeholder="Search records"
                    aria-controls="datatables"
                /></label>
                <div class="columns columns-right pull-right">
                  <button
                    type="button"
                    class="btn btn-sm btn-primary btn-fill"
                    @click="toggleModalCreate()"
                  >
                    Thêm mới
                  </button>
                </div>
              </div>
              <table class="table table-hover">
                <thead>
                  <th class="text-center">ID</th>
                  <th>Mã tác giả</th>
                  <th>Tên tác giả</th>
                  <th>Ngày sinh</th>
                  <th>Quốc gia</th>
                  <th class="text-center">Actions</th>
                </thead>
                <tbody v-if="authors != null && authors.data.length > 0">
                  <tr v-for="(item, index) in authors.data" :key="index">
                    <td class="text-center">{{ item.id }}</td>
                    <td>{{ item.code }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.date_of_birth }}</td>
                    <td>{{ item.country }}</td>
                    <td class="text-center">
                      <a
                        rel="tooltip"
                        title="View"
                        class="btn btn-simple btn-info btn-icon table-action view"
                        href="javascript:void(0)"
                      >
                        <i class="fa fa-image"></i>
                      </a>
                      <a
                        rel="tooltip"
                        title="Edit"
                        class="btn btn-simple btn-warning btn-icon table-action edit"
                        href="javascript:void(0)"
                      >
                        <i class="fa fa-edit"></i>
                      </a>
                      <a
                        rel="tooltip"
                        title="Remove"
                        class="btn btn-simple btn-danger btn-icon table-action remove"
                        href="javascript:void(0)"
                      >
                        <i class="fa fa-remove"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <create-modal v-if="showModelCreate" @close-modal="toggleModalCreate()" @update-data="getData()">
        </create-modal>

        
        <!--  end card  -->
      </div>
      <!-- end col-md-12 -->
    </div>
    <!-- end row -->
  </div>
</template>
<script setup>
import CreateModal from "./CreateAuthorModal.vue";

import { ref, reactive, onBeforeMount, computed, watch } from "vue";
import { useStore } from "vuex";
import moment from 'moment';

const store = useStore();

const showModelCreate = ref(false);

const toggleModalCreate = () => showModelCreate.value = !showModelCreate.value;

const authors = computed(() => store.state.user.authors ?? null);

const getData = () => store.dispatch("user/getListAuthor");

onBeforeMount(async () => {
  await getData();
});
</script>
<style scoped>
.table {
  padding: 0 0.2rem;
}
.table th {
  border-bottom-width: 1px;
  font-size: 12px;
  text-transform: uppercase;
  color: #7c7c7c;
  font-weight: 400;
  padding: 0.5rem 0rem;
}
.table tr td {
  padding: 0.1rem;
  vertical-align: middle;
  border-color: #e3e3e3;
}
</style>
