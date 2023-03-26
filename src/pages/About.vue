<template>
  <div class="main">
    <span class="title">About page </span>
  </div>
</template>

<script>
export default {
  name: "page-about",
};
</script>

<style scoped>
.main {
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 56px;
  color: rgb(65, 184, 131);
}
</style>
