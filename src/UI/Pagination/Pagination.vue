<template>
  <div class="pagination">
    <div
      class="page"
      :class="{
        active: page === currentPage,
      }"
      @click="$emit('changeCurrentPage', page)"
      v-for="page in totalPages"
      :key="page"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: "app-pagination",
  props: {
    currentPage: Number,
    pageLimit: String,
    limit: String,
  },
  computed: {
    totalPages() {
      return Math.ceil(this.limit / this.pageLimit);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
}
.page {
  padding: 5px 10px;
  border: 1px solid rgb(65, 184, 131);
  margin-right: 0.2rem;
  color: rgb(65, 184, 131);
  cursor: pointer;
  transition: 0.3s all ease;
}

.active {
  color: white;
  background-color: rgb(65, 184, 131);
}

.page:hover {
  color: white;
  background-color: rgb(65, 184, 131);
}
</style>
