<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "app-button",
  props: {},
};
</script>

<style>
.button {
  cursor: pointer;
  background-color: transparent;
  padding: 10px 15px;
  border: 1px solid teal;
  color: teal;
  border-radius: 5px;
  align-self: flex-end;
  transition: 0.5s all ease;
}

.button:hover {
  color: white;
  background-color: teal;
}
</style>
