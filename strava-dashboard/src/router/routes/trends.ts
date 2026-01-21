export default {
  path: "/trends",
  name: "trends",
  component: () => import("@/views/trends/TrendsView.vue"),
  meta: { title: "Tendencias", requiresAuth: true },
};
