<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="input"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "app-input",
  props: {
    modelValue: [],
    placeholder: {},
  },
};
</script>

<style scoped>
.input {
  padding: 10px 15px;
  border: 1px solid rgb(65, 184, 131);
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
