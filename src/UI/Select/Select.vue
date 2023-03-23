<template>
  <select class="select" :value="modelValue" @change="onSelectChange">
    <option value="" disabled>Выберите опцию</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "app-select",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onSelectChange(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.select {
  padding: 5px;
  border: 1px solid teal;
  border-radius: 5px;
  color: teal;
}
</style>
