<template>
  <button><slot /></button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";
button {
  cursor: pointer;
  font-family: $default-font;
  background: #24ab70;
  border-radius: 35px;
  border: none;
  color: $white;
}
</style>
