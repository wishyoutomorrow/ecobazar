import HomeView from "@/views/HomeView.vue";
import ShopView from "@/views/ShopView.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProductView from "@/views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
    },
    {
      path: "/:id",
      name: "product",
      component: ProductView,

    },
  ],
});

export default router;
