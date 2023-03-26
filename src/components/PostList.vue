<template>
  <div class="posts">
    <transition-group name="post-list">
      <post-item
        v-for="post of posts"
        @deletePost="$emit('deletePost', post.id)"
        :post="post"
        :key="post.id"
      ></post-item>
    </transition-group>
    <!-- <app-pagination
      v-if="posts.length"
      limit="100"
      pageLimit="10"
      :currentPage="currentPage"
      @changeCurrentPage="(page) => $emit('changeCurrentPage', page)"
    ></app-pagination> -->
  </div>
</template>

<script>
import PostItem from "./PostItem";

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {},
    currentPage: Number,
  },
};
</script>

<style>
.posts {
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.post-list-move {
  transition: transform 0.5s ease;
}
</style>
