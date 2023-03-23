<template>
  <div class="menu">
    <app-button @click="$emit('openModal')">Add post</app-button>
    <app-select
      v-model="localeSelectedValue"
      :options="selectOption"
      class="app-select"
    ></app-select>
    <div class="searchBlock">
      <span>Search post:</span>
      <app-input class="search" v-model="localeSearchValue"></app-input>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      selectOption: [
        { value: "title", name: "По заголовку" },
        { value: "body", name: "По описанию" },
      ],
      localeSearchValue: "",
      localeSelectedValue: "",
    };
  },
  watch: {
    localeSearchValue(newValue) {
      this.$emit("changeSearchValue", newValue);
    },
    localeSelectedValue(newValue) {
      this.$emit("changeSelectedValue", newValue);
    },
  },
};
</script>

<style scoped>
.menu {
  margin-top: 1rem;
}
.app-select {
  margin-left: 0.25rem;
}

.searchBlock {
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  margin-bottom: 0rem;
  margin-top: 1.25rem;
}
</style>
