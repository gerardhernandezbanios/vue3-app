export default {
  path: "/settings",
  name: "settings",
  component: () => import("@/views/settings/SettingsView.vue"),
  meta: { title: "Configuración", requiresAuth: true },
};
