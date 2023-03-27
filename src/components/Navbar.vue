<template>
  <div class="navbar">
    <h2 @click="$router.push('/')" style="cursor: pointer">Logo</h2>
    <div class="navbar_pages">
      <router-link to="/about">About</router-link>
      <router-link style="margin: 0 1.5rem" to="/posts">Posts</router-link>
      <router-link to="/postsfromstore">Posts from store</router-link>
      <router-link style="margin-left: 1.5rem" to="/postscomposition"
        >Posts composition api</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "app-navbar",
};
</script>

<style scoped>
.navbar {
  height: 80px;
  background-color: rgb(65, 184, 131);
  color: white;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  justify-content: space-between;
  padding: 0 2rem;
}

.navbar_pages a {
  font-size: 18px;
  color: white;
  text-decoration: none;
  transition: 0.5s all ease;
}

.navbar_pages a:hover {
  text-decoration: underline;
}
</style>
