import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/projects"
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue")
  },
  {
    path: "/project/:id",
    name: "Project",
    component: () => import("../views/Project.vue")
  },
  {
    path: "/project/:id/setting",
    name: "Setting_Project",
    component: () => import("../views/Setting_Project.vue")
  },
  {
    path: "/page/:id",
    name: "Page",
    component: () => import("../views/Page.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
