<template>
  <main>
    <div class="app">
      <post-menu
        @changeSearchValue="(value) => (searchValue = value)"
        @changeSelectedValue="(value) => (selectedValue = value)"
        @openModal="openModal"
      ></post-menu>
      <hr />
      <post-list
        v-if="posts.length"
        @deletePost="deletePost"
        :posts="sortedPosts"
      ></post-list>
      <h1 v-else>Нет постов</h1>
    </div>
  </main>
  <app-modal @closeModal="closeModal" :isOpen="isOpen">
    <post-form @createPost="createPost"></post-form>
  </app-modal>
</template>

<script>
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostMenu from "@/components/PostMenu";

export default {
  components: {
    PostList,
    PostForm,
    PostMenu,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "React post", body: "C React post description" },
        { id: 2, title: "JS post", body: "A JS post description" },
        { id: 3, title: "Vue post", body: "B Vue post description" },
      ],
      selectedValue: "",
      searchValue: "",
      isOpen: false,
    };
  },
  computed: {
    sortedPosts() {
      const sortedPosts = [...this.posts].sort((a, b) =>
        a[this.selectedValue]?.localeCompare(b[this.selectedValue])
      );

      if (this.searchValue) {
        return sortedPosts.filter((post) =>
          post.title
            .toLocaleLowerCase()
            .startsWith(this.searchValue.toLocaleLowerCase())
        );
      }
      return sortedPosts;
    },
  },
  methods: {
    qwe(w) {
      this.searchValue = w;
    },
    createPost(post) {
      const lastPostId = this.posts[this.posts.length - 1]?.id || 0;

      this.posts.push({
        ...post,
        id: lastPostId + 1,
      });
    },
    deletePost(postId) {
      this.posts = this.posts.filter((post) => post.id !== postId);
    },
    closeModal() {
      this.isOpen = false;
    },
    openModal() {
      this.isOpen = true;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  width: 100vw;
  display: flex;
  justify-content: center;
}

.app {
  width: 600px;
}

hr {
  margin-bottom: 1.5rem;
}
</style>
