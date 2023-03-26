<template>
  <main>
    <div class="app">
      <post-menu
        @changeSearchValue="setSearchValue"
        @changeSelectedValue="setSelectedValue"
        @openModal="openModal"
        hideCreatePost
      ></post-menu>
      <hr />
      <h1 v-if="!sortedPosts.length && !isPostsLoading">Нет постов</h1>
      <h1 v-if="sortedPosts.length && !isPostsLoading">Список постов:</h1>
      <post-list
        @changeCurrentPage="changeCurrentPage"
        :currentPage="currentPage"
        v-if="posts.length"
        @deletePost="deletePost"
        :posts="sortedPosts"
      ></post-list>
      <app-spinner v-if="isPostsLoading"></app-spinner>
      <div v-observer:[observableData]="observableData" class="observer"></div>
    </div>
  </main>
  <app-modal @closeModal="closeModal" :isOpen="isOpen">
    <post-form @createPost="createPost"></post-form>
  </app-modal>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import PostMenu from "@/components/PostMenu";

export default {
  name: "page-posts",
  components: {
    PostList,
    PostForm,
    PostMenu,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
      isPostsLoading: (state) => state.posts.isPostsLoading,
      currentPage: (state) => state.posts.currentPage,
      selectedValue: (state) => state.posts.selectedValue,
      searchValue: (state) => state.posts.searchValue,
      total: (state) => state.posts.total,
    }),
    ...mapGetters({
      sortedPosts: "posts/sortedPosts",
    }),
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
    ...mapMutations({
      setSelectedValue: "posts/setSelectedValue",
      setSearchValue: "posts/setSearchValue",
    }),
    ...mapActions({
      fetchPostsForInfiniteScroll: "posts/fetchPostsForInfiniteScroll",
    }),
    deletePost(postId) {
      this.posts = this.posts.filter((post) => post.id !== postId);
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
