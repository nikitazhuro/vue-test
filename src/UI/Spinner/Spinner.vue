<template>
  <div class="main">
    <div class="spinner"></div>
    <span>Loading...</span>
  </div>
</template>

<script>
export default {
  name: "app-spinner",
};
</script>

<style scoped>
.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px dashed rgb(65, 184, 131);
  animation: infinite 1s ani;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(65, 184, 131);
}

@keyframes ani {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}
</style>
