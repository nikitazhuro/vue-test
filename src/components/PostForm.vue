<template>
  <div class="form">
    <h1>Создание поста:</h1>
    <div>
      <app-input
        v-focus
        v-model="post.title"
        placeholder="Введите заголовок"
      ></app-input>
      <app-input v-model="post.body" placeholder="Введите описание"></app-input>
    </div>
    <app-button v-observe @click="createPost">Create</app-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.$emit("createPost", this.post);
      return (this.post = {
        title: "",
        body: "",
      });
    },
  },
};
</script>

<style scoped>
.form {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(65, 184, 131);
  border-radius: 5px;
  padding: 25px;
}
</style>
