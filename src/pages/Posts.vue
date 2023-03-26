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
import axios from "axios";

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
      posts: [],
      selectedValue: "",
      searchValue: "",
      total: 100,
      currentPage: 1,
      isOpen: false,
      isLoading: true,
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
    // async fetchPosts() {
    //   try {
    //     this.isLoading = true;
    //     const response = await axios.get(
    //       "https://jsonplaceholder.typicode.com/posts",
    //       {
    //         params: {
    //           _limit: 10,
    //           _page: this.currentPage,
    //         },
    //       }
    //     );
    //     this.posts = response.data;
    //     this.isLoading = false;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    async fetchPostsForInfiniteScroll() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: 10,
              _page: this.currentPage,
            },
          }
        );
        this.posts = [...this.posts, ...response.data];
        this.currentPage += 1;
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
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
