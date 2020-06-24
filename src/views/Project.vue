<template>
  <main-layout>
    <main class="app-project">
      <div class="panel">
        <div class="panel_list">
          <div class="panel_list_item">
            <i class="small material-icons">domain</i>
            <span class="text">Подключить домен</span>
          </div>
          <div class="panel_list_item">
            <i class="small material-icons">publish</i>
            <span class="text">Опубликовать все страницы</span>
          </div>
          <div class="panel_list_item">
            <i class="small material-icons">list</i>
            <span class="text">Заявки</span>
          </div>
        </div>
        <div class="panel_site">
          <div class="panel_site_text">
            <i class="small material-icons icon">open_in_new</i>
            <span class="text">Адрес сайта:</span>
          </div>
          <a :href="project.link" target="_blank" class="panel_site_link">
            {{ project.link }}
          </a>
        </div>
      </div>
      <div class="head-and-btns">
        <h3 class="head">
          {{ project.head }}
        </h3>
        <div class="btns">
          <div class="btns_setting-site btn">
            <i class="small material-icons icon">settings</i>
            <span class="text">Настройка сайта</span>
          </div>
          <div class="btns_new-page btn">
            <i class="small material-icons icon">add</i>
            <span class="text">Создать новую страницу</span>
          </div>
        </div>
      </div>
      <pages />
    </main>
  </main-layout>
</template>

<script>
import Pages from "@/components/Project/Pages";

export default {
  data: () => ({
    project: {
      id: 2310,
      head: "My project",
      link: "project2649969.tilda.ws"
    }
  }),
  components: {
    Pages
  }
};
</script>

<style lang="scss" scoped>
.app-project {
  .panel {
    display: flex;
    justify-content: space-between;

    &_list {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &_item {
        display: flex;
        align-items: center;
        font-size: 18px;
        margin-right: 2rem;
        cursor: pointer;

        .text {
          margin-left: 0.5rem;
        }
        &:hover .text {
          color: #f4846b;
        }
      }
    }
    &_site {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &_text {
        display: flex;
        align-items: center;
        font-size: 16px;
        margin-right: 1rem;

        .text {
          margin-left: 0.5rem;
        }
      }
      &_link {
        color: #111;
      }
    }
  }
  .head-and-btns {
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;

    .head {
      font-size: 3rem;
      color: #111;
      margin: 0;
    }
    .btns {
      display: flex;
      align-items: center;

      .btn {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding: 0px 15px;
        border-radius: 55px;
        cursor: pointer;
      }
      &_setting-site {
        background-color: #fff;
        .icon {
          margin-right: 0.5rem;
        }
        .text {
          font-size: 12px;
          color: #111;
        }
      }
      &_new-page {
        background-color: #fa876b;
        margin-left: 2rem;
        .icon {
          color: #fff;
          margin-right: 0.5rem;
        }
        .text {
          font-size: 12px;
          color: #fff;
        }
      }
    }
  }
}
</style>
