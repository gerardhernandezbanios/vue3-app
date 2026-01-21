export default {
  path: "/dashboard",
  name: "dashboard",
  component: () => import("@/views/dashboard/DashboardView.vue"),
  meta: { title: "Dashboard", requiresAuth: true },
};
