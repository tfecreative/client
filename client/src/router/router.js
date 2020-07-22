import Vue from "vue";
import Router from "vue-router";
import { AboutRoutes } from "@/modules/about/routes";
import { HomeRoutes } from "@/modules/home/routes";

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...AboutRoutes, ...HomeRoutes],
});

Vue.use(Router);
export default router;
