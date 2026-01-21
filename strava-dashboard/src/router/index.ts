import { createRouter, createWebHistory } from "vue-router";
import dashboard from "./routes/dashboard";
import activities from "./routes/activities";
import trends from "./routes/trends";
import maps from "./routes/maps";
import settings from "./routes/settings";

const routes = [
  { path: "/", redirect: "/dashboard" },
  dashboard,
  activities,
  trends,
  maps,
  settings,
  { path: "/:pathMatch(.*)*", redirect: "/dashboard" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  document.title = (to.meta?.title as string) || "Strava Analytics";
});

export default router;
