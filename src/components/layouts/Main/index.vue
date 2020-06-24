<template>
  <div class="layout">
    <Header />
    <div class="container">
      <slot />
    </div>
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

<style scoped lang="scss"></style>
