import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import CoachesView from "../components/views/CoachesView.vue";
import RequestsView from "../components/views/RequestsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: CoachesView
  },
  {
    path: "/requests",
    component: RequestsView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
