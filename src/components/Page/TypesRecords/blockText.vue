<template>
  <div class="block_text">
    <div class="head">
      {{ data.content.head }}
    </div>
    <div class="text">
      {{ data.content.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped>
.block_text {
  width: 60%;
  margin: 2rem auto;

  .head {
    margin-bottom: 1rem;
    font-size: 18px;
    color: #111;
  }
  .text {
    font-size: 16px;
    color: #111;
  }
}
</style>
