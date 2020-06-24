<template>
  <header class="header-workspace-layout">
    <nav class="nav">
      <div class="nav_breadcrumbs">
        <router-link to="/projects" class="nav_breadcrumbs_item">
          <i class="small material-icons icon">
            home
          </i>
          <span class="text">Мои сайты</span>
        </router-link>
        <div class="nav_breadcrumbs_arrow">
          <span>⟶</span>
        </div>
        <router-link to="/project/224" class="nav_breadcrumbs_item">
          <span class="text">My project</span>
        </router-link>
      </div>
      <div class="nav_panel">
        <div class="nav_panel_item" @click="isOpenLibraryBlocks">
          <span class="text">Добавить запись</span>
        </div>
        <div class="nav_panel_item">
          <span class="text">Предпросмотр</span>
        </div>
        <div class="nav_panel_item">
          <span class="text"><b>Опубликовать</b></span>
        </div>
        <div class="nav_panel_item">
          <span class="text">Настройки</span>
        </div>
        <div class="nav_panel_item">
          <span class="text">Помощь</span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    isOpenLibraryBlocks() {
      this.$store.dispatch("page/openLibraryBlocks");
    }
  }
};
</script>

<style lang="scss" scoped>
.header-workspace-layout {
  height: 65px;

  .nav {
    position: fixed;
    top: 0;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 0 20px;

    &_breadcrumbs {
      display: flex;
      justify-content: space-between;

      &_item {
        display: flex;

        &:hover .text,
        &:hover .icon {
          color: #ff8562;
        }
        .icon {
          margin-right: 0.5rem;
          color: #111;
        }
        .text {
          color: #111;
        }
      }
      &_arrow {
        margin: 0 1rem;
        color: #111;
      }
    }
    &_panel {
      display: flex;
      align-items: center;

      &_item {
        cursor: pointer;
        margin-left: 2rem;

        &:hover .text {
          color: #ff8562;
        }
        .text {
          color: #111;
        }
      }
    }
  }
}
</style>
