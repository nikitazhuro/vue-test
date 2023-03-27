import { ref } from "vue";
import axios from "axios";

export const usePosts = () => {
  const posts = ref<any>([]);
  const postsLoading = ref<boolean>(true);
  const currentPage = ref<number>(1);

  console.log(currentPage);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: 10,
            _page: currentPage.value,
          },
        }
      );
      posts.value = [...posts.value, ...response.data];
      currentPage.value += 1;
    } catch (error) {
      console.log(error);
    } finally {
      postsLoading.value = false;
    }
  };

  return { fetchPosts, posts, postsLoading, currentPage };
};
