<template>
  <div class="layout">
    <Header />
    <slot />
  </div>
</template>

<script>
import Header from "./Header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped></style>
