import { createRouter, createWebHistory } from "vue-router";

import Main from "../pages/Main.vue";
import Posts from "../pages/Posts.vue";
import Post from "../pages/Post.vue";
import About from "../pages/About.vue";
import PostsFromStore from "../pages/PostsFromStore.vue";

const routes = [
  { path: "/", component: Main },
  { path: "/posts", component: Posts },
  { path: "/postsfromstore", component: PostsFromStore },
  { path: "/posts/:id", component: Post },
  { path: "/about", component: About },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
