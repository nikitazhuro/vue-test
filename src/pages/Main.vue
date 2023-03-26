<template>
  <div class="main">
    <div class="main__content">
      <img
        src="../../public/vue-logo.svg"
        width="350"
        height="350"
        alt="image"
      />
      <span class="title"> Hello, Vue3! </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-main",
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
  margin-top: 1rem;
  font-size: 56px;
  color: rgb(65, 184, 131);
}
.main__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
