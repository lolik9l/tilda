<template>
  <div class="setting-record"></div>
</template>

<script>
export default {
  computed: {
    record() {
      return this.$store.getters["records/recordActive"];
    }
  }
};
</script>

<style lang="scss" scoped>
.setting-record {
  position: fixed;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  transition: 0.5s left linear;
  background-color: #fff;
  z-index: 9999;

  &.active {
    left: 0%;
  }
}
</style>
