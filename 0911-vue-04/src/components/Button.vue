<template>
  <div>
    <button data-testid="btn" :disabled="disabled" @click="handleClick">
      <slot>默认按钮</slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
