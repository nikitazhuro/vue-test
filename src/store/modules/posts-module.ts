import axios from "axios";
import { GetterTree, MutationTree, ActionTree } from "vuex";

interface IPostsState {
  posts: Array<any>;
  isPostsLoading: boolean;
  currentPage: number;
  selectedValue: string;
  searchValue: string;
  total: number;
}

const initialState: IPostsState = {
  posts: [],
  isPostsLoading: true,
  currentPage: 1,
  selectedValue: "",
  searchValue: "",
  total: 100,
};

const getters = <GetterTree<IPostsState, any>>{
  sortedPosts(state) {
    const sortedPosts = [...state.posts].sort((a, b) =>
      a[state.selectedValue]?.localeCompare(b[state.selectedValue])
    );

    if (state.searchValue) {
      return sortedPosts.filter((post) =>
        post.title
          .toLocaleLowerCase()
          .startsWith(state.searchValue.toLocaleLowerCase())
      );
    }
    return sortedPosts;
  },
};

const mutations = <MutationTree<IPostsState>>{
  setSelectedValue(state, payload) {
    state.selectedValue = payload;
  },
  setSearchValue(state, payload) {
    state.searchValue = payload;
  },
  setPosts(state, payload) {
    state.posts = payload;
  },
  setIsPostsLoading(state, payload) {
    state.isPostsLoading = payload;
  },
  setCurrentPage(state, payload) {
    state.currentPage = payload;
  },
};

const actions = <ActionTree<IPostsState, any>>{
  async fetchPostsForInfiniteScroll({ commit, state }) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: 10,
            _page: state.currentPage,
          },
        }
      );

      commit("setPosts", [...state.posts, ...response.data]);
      commit("setCurrentPage", state.currentPage + 1);
    } catch (error) {
      console.log(error);
    } finally {
      commit("setIsPostsLoading", false);
    }
  },
};

const postsModule = {
  state: initialState,
  getters,
  mutations,
  actions,
  namespaced: true,
};

export default postsModule;
