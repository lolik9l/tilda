<template>
  <div class="block_cover">
    <img
      class="block_cover_img"
      :src="`/images/${data.content.img}`"
      alt="cover"
    />
    <div class="block_cover_content">
      <h2 class="block_cover_content_head">{{ data.content.head }}</h2>
      <p class="block_cover_content_desc">{{ data.content.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped>
.block_cover {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: -1;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
  &_img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
  &_content {
    max-width: 75%;
    &_head {
      margin-bottom: 1rem;
      font-size: 18px;
      color: #fff;
    }
    &_desc {
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>
