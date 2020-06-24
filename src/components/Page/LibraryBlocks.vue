<template>
  <div class="library-blocks">
    <div class="library-blocks_left">
      <div class="library-blocks_left_header">
        <p class="head">Библиотека блоков</p>
        <div class="search">
          <i class="small material-icons icon">
            search
          </i>
        </div>
        <div class="close" @click="isOpenLibraryBlocks">
          <i class="small material-icons icon">
            close
          </i>
        </div>
      </div>
      <div class="library-blocks_left_list">
        <div
          class="library-blocks_left_list_item"
          v-for="(category, index) in categories"
          :key="index"
          :class="{ active: activeCategory == category.name }"
          @click="activeCategory = category.name"
        >
          <p class="title">{{ category.title }}</p>
        </div>
      </div>
    </div>
    <div class="library-blocks_right">
      <div class="library-blocks_right_list">
        <div
          class="library-blocks_right_list_item"
          v-for="(block, index) in library"
          :key="index"
          v-show="block.categoryName == activeCategory"
          @click="addRecord(block)"
        >
          <h4 class="head">{{ block.library.head }}</h4>
          <p class="desc">{{ block.library.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    library: [],
    categories: [],
    activeCategory: "texts"
  }),
  methods: {
    addRecord(block) {
      this.$store.dispatch(
        "records/addRecord",
        JSON.parse(JSON.stringify(block))
      );
    },
    isOpenLibraryBlocks() {
      this.$store.dispatch("page/openLibraryBlocks");
    },
    request(url) {
      return new Promise((res, rej) => {
        const data = require(`@/data/${url}.json`);
        if (!data) {
          rej("Записей не найдено");
        }
        res(data);
      });
    }
  },
  mounted() {
    this.request("recordsDefault")
      .then(data => (this.library = data))
      .catch(err => console.error(err));

    this.request("categoriesBlocks")
      .then(data => (this.categories = data))
      .catch(err => console.error(err));
  }
};
</script>

<style lang="scss" scoped>
.library-blocks {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: -100%;
  width: 50%;
  height: 100%;
  transition: 0.5s left ease-in-out;
  background-color: #fff;
  z-index: 9999;

  &.active {
    left: 0%;
  }

  &_left {
    min-width: 40%;
    border-right: 1px solid;
    padding: 0 10px;

    &_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #111;
      margin-bottom: 1rem;

      .head {
        color: #111;
        font-size: 1.2rem;
      }
      .search {
        font-size: 2rem;
        cursor: pointer;
      }
      .close {
        font-size: 2rem;
        cursor: pointer;
      }
    }
    &_list {
      &_item {
        border-bottom: 1px solid #111;
        cursor: pointer;
        &:hover .title,
        &.active .title {
          color: #ff8562;
        }
        .title {
          color: #111;
        }
      }
    }
  }
  &_right {
    width: 100%;
    padding: 0 10px;

    &_list {
      &_item {
        border-bottom: 1px solid #111;
        cursor: pointer;

        &:hover .head {
          color: #ff8562;
        }
        .head {
          font-size: 1.5rem;
          color: #111;
        }
        .desc {
          color: #111;
        }
      }
    }
  }
}
</style>
