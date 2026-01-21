export default {
  path: '/activities',
  name: 'activities',
  component: () => import('@/views/activities/ActivitiesView.vue'),
  meta: { title: 'Actividades', requiresAuth: true },
};
