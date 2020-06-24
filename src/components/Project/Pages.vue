<template>
  <div class="pages">
    <div class="pages_desc">
      <span class="pages_desc_text">Страницы сайта:</span>
    </div>
    <div class="pages_list">
      <router-link
        class="pages_list_item"
        v-for="(page, index) in pages"
        :to="`/page/${page.id}`"
        :key="index"
      >
        <div class="pages_list_item_img">
          <img
            :src="require(`@/assets/images/pages/${page.img}`)"
            :alt="page.head"
          />
        </div>
        <div class="pages_list_item_head">
          <span class="text">{{ page.head }}</span>
        </div>
        <div class="pages_list_item_controls controls">
          <div class="control">
            <i class="small material-icons icon">
              settings
            </i>
            <span class="text">Настройка</span>
          </div>
          <div class="control">
            <i class="small material-icons icon">
              publish
            </i>
            <span class="text">Публиковать</span>
          </div>
          <div class="control">
            <i class="small material-icons icon">
              open_in_new
            </i>
            <span class="text">Ссылка</span>
          </div>
          <div class="control">
            <i class="small material-icons icon">
              delete
            </i>
            <span class="text">Удалить</span>
          </div>
        </div>
        <div class="pages_list_item_status">
          <span class="text">{{ page.status }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    pages: [
      {
        id: 2310,
        img: "page_1112.jpg",
        head: "Универсальная бизнес страница",
        link: "project2649969.tilda.ws",
        status: "Главная страница"
      },
      {
        id: 2320,
        img: "page_1112.jpg",
        head: "Универсальная страница компании",
        link: "project2649969.tilda.ws",
        status: "Не опубликована"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.pages {
  margin-top: 5rem;

  &_desc {
    text-align: left;

    &_text {
      font-size: 16px;
      opacity: 0.6;
    }
  }
  &_list {
    margin-top: 2rem;

    &_item {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 20px 0px;
      border-bottom: 1px solid #d5d5d5;
      cursor: pointer;

      &:hover .controls {
        opacity: 1;
      }
      &_img {
        width: 75px;
        height: 75px;
        margin-right: 50px;
        border-radius: 50%;
        border: 1px solid #d5d5d5;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }
      &_head {
        &:hover .text {
          color: #fa8669;
        }
        .text {
          color: #111;
          font-size: 1.5rem;
        }
      }
      &_controls {
        position: absolute;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f0f0f0;
        z-index: 1;
        opacity: 0;

        .control {
          display: flex;
          align-items: center;
          margin-right: 1rem;

          &:hover .text {
            color: #fa8669;
          }
          .icon {
            margin-right: 0.5rem;
            color: #111;
          }
          .text {
            color: #111;
          }
        }
      }
      &_status {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
