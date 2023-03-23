<template>
  <div @click="closeModal" v-if="isOpen" class="modal">
    <div @click.stop class="modal_content">
      <div>
        <img
          src="../../../public/cross.svg"
          width="50"
          height="50"
          @click="closeModal"
          alt="cross"
        />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-modal",
  props: {
    isOpen: {},
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal_content {
  position: relative;
  background-color: white;
  width: 600px;
  height: 400px;
  border: 1px solid teal;
}
</style>
