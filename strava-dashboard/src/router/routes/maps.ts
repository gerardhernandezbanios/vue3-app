export default {
  path: "/maps",
  name: "maps",
  component: () => import("@/views/maps/MapsView.vue"),
  meta: { title: "Mapas", requiresAuth: true },
};
