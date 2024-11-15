import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  {
    path: "/test",
    component: () => import("@/views/abount.vue"),
  },
  {
    path: '/comp',
    component:()=>import('@/views/parent/parent.vue')
  }
];
console.log("meta", import.meta.env);
const router = createRouter({
  //   history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  history: createWebHashHistory(),
  routes,
});
export default router;
