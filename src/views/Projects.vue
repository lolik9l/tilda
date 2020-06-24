<template>
  <main-layout>
    <main class="app-projects">
      <div class="panel">
        <div class="panel_desc">
          <span class="panel_desc_text">Мои сайты:</span>
        </div>
        <div class="panel_buttons">
          <div class="button">
            <i class="small material-icons button_icon">
              add_circle_outline
            </i>
            <span class="button_text text">Создать новый сайт</span>
          </div>
        </div>
      </div>
      <div class="projects">
        <div
          class="projects_project"
          v-for="(project, index) in projects"
          :key="index"
        >
          <router-link
            :to="`/project/${project.id}`"
            class="projects_project_head"
          >
            {{ project.head }}
          </router-link>
          <hr class="projects_project_line" />
          <div class="projects_project_buttons">
            <router-link :to="`/project/${project.id}`" class="edit">
              <i class="small material-icons edit_icon">create</i>
              <span class="edit_text text">Редактировать сайт</span>
            </router-link>
            <a :href="project.link" target="_blank" class="link">
              <i class="small material-icons link_icon">open_in_new</i>
              <span class="link_text text">{{ project.link }}</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  </main-layout>
</template>

<script>
export default {
  name: "Projects",
  computed: {
    projects() {
      return [
        {
          id: 2310,
          head: "My project",
          link: "project2649969.tilda.ws"
        },
        {
          id: 2311,
          head: "My project 1",
          link: "project2649969.tilda.ws"
        },
        {
          id: 2312,
          head: "My project 2",
          link: "project2649969.tilda.ws"
        },
        {
          id: 2313,
          head: "My project 3",
          link: "project2649969.tilda.ws"
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.app-projects {
  .panel {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_desc {
      &_text {
        font-size: 16px;
        opacity: 0.6;
      }
    }
    &_buttons {
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &_icon {
          margin-right: 5px;
        }
        &_text {
          color: #111;
          font-size: 18px;
        }
        &:hover .text {
          color: #f4846b;
        }
      }
    }
  }
  .projects {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;

    &_project {
      display: flex;
      flex-direction: column;
      align-items: self-start;
      padding: 2rem;
      margin-bottom: 2rem;
      min-width: calc(50% - 1rem);
      background-color: #fff;
      border: 1px solid #d9d9d9;

      &_head {
        width: 100%;
        height: 180px;
        font-size: 3.5rem;
        text-align: left;
        color: #111;

        &:hover {
          color: #f4846b;
        }
      }
      &_line {
        width: 100%;
        margin: 2rem 0;
        background-color: #e5e5e5;
      }
      &_buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .edit {
          display: flex;
          align-items: center;

          &_icon {
            margin-right: 5px;
          }
          &_text {
            color: #111;
            font-size: 18px;
          }
          &:hover .text {
            color: #f4846b;
          }
        }
        .link {
          display: flex;
          align-items: center;

          &_icon {
            margin-right: 5px;
          }
          &_text {
            color: #111;
            font-size: 18px;
          }
          &:hover .text {
            color: #f4846b;
          }
        }
      }
    }
  }
}
</style>
