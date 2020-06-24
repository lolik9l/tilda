<template>
  <header class="header-main-layout">
    <nav class="nav">
      <div class="nav_menu">
        <router-link class="nav_menu_logo" to="/">
          <img
            src="@/assets/images/logo.png"
            class="nav_menu_logo_img"
            alt="logo"
          />
        </router-link>
        <ul class="nav_menu_links">
          <li>
            <router-link class="nav_menu_links_link" to="/projects">
              Мои сайты
            </router-link>
          </li>
          <li>
            <router-link class="nav_menu_links_link" to="#">
              Профиль
            </router-link>
          </li>
        </ul>
      </div>
      <div class="nav_logout" @click="logout">
        <span class="text">Выйти</span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      console.log("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.header-main-layout {
  margin-bottom: 4rem;

  .nav {
    display: flex;
    justify-content: space-between;
    background-color: #111;
    line-height: 0;

    &_menu {
      display: flex;

      &_logo {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 15px;
        padding-right: 30px;
        &_img {
          width: 50px;
          height: 50px;
        }
      }
      &_links {
        display: flex;

        &_link {
          display: flex;
          align-items: center;
          height: 100%;
          font-size: 1.2rem;
          border-bottom: 3px solid transparent;
          color: #fff;

          &:hover {
            color: #fa886e;
          }
          &.router-link-active {
            border-bottom: 3px solid #f4846b;
          }
        }
      }
    }
    &_logout {
      display: flex;
      align-items: center;
      padding: 0 15px;
      cursor: pointer;

      .text {
        font-size: 1.2rem;
      }
      &:hover .text {
        color: #f4846b;
      }
    }
  }
}
</style>
