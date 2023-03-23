<template>
  <div class="post">
    <div>
      <div>
        {{ post.id }}.
        <span class="postTitle">
          {{ post.title }}
        </span>
      </div>
      <div>
        {{ post.body }}
      </div>
    </div>
    <app-button @click="$emit('deletePost', post.id)">Delete</app-button>
  </div>
</template>

<script>
export default {
  props: {
    post: {},
  },
};
</script>

<style scoped>
.post {
  border: 1px solid teal;
  padding: 25px;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
}
</style>
