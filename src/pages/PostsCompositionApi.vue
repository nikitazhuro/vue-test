<template>
  <main>
    <div class="app">
      <post-menu
        @changeSearchValue="(value) => (searchValue = value)"
        @changeSelectedValue="(value) => (selectedValue = value)"
        @openModal="openModal"
      ></post-menu>
      <hr />
      <h1 v-if="!sortedPosts.length && !isLoading">Нет постов</h1>
      <h1 v-if="sortedPosts.length && !isLoading">Список постов:</h1>
      <post-list
        @changeCurrentPage="changeCurrentPage"
        :currentPage="currentPage"
        v-if="posts.length"
        @deletePost="deletePost"
        :posts="sortedPosts"
      ></post-list>
      <app-spinner v-if="isLoading"></app-spinner>
      <div v-observer:[observableData]="observableData" class="observer"></div>
    </div>
  </main>
  <app-modal @closeModal="closeModal" :isOpen="isOpen">
    <post-form @createPost="createPost"></post-form>
  </app-modal>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostMenu from "@/components/PostMenu";

import { usePosts } from "../hooks/usePosts";

export default {
  name: "page-posts",
  components: {
    PostList,
    PostForm,
    PostMenu,
  },
  data() {
    return {
      selectedValue: "",
      searchValue: "",
      total: 100,
      isOpen: false,
    };
  },
  setup() {
    const { posts, postsLoading, currentPage, fetchPosts } = usePosts();

    return {
      isLoading: postsLoading,
      currentPage,
      fetchPostsForInfiniteScroll: fetchPosts,
      posts,
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
    observableData() {
      return {
        cb: this.fetchPostsForInfiniteScroll,
        currentPage: this.currentPage,
        pageLimit: 10,
        total: this.total,
      };
    },
  },
  methods: {
    changeCurrentPage(page) {
      this.currentPage = page;
    },
    createPost(post) {
      const lastPostId = this.posts[this.posts.length - 1]?.id || 0;

      this.posts.push({
        ...post,
        id: lastPostId + 1,
      });

      this.isOpen = false;
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
  // mounted() {
  //   this.fetchPosts();
  // },
  watch: {
    currentPage() {
      // this.fetchPosts();
    },
  },
};
</script>

<style scoped>
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

.observer {
  width: 100%;
  height: 1px;
}
</style>
