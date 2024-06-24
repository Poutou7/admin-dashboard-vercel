/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/Error.vue"),
    },
    {
      path: "/main",
      redirect: "/main",
      component: () => import("@/layouts/full/FullLayout.vue"),
      children: [
        {
          name: "home",
          path: "/",
          component: () => import("@/views/DashboardHome.vue"),
        },
        {
          name: "Account Setting",
          path: "/account-settings",
          component: () =>
            import("@/views/AccountSettings.vue"),
        },
        {
          name: "Chat",
          path: "/chat",
          component: () =>
            import("@/views/Chat.vue"),
        },
        {
          name: "merchant",
          path: "/merchant",
          component: () => import("@/views/Merchant.vue"),
        },
        {
          name: "services",
          path: "/services",
          component: () => import("@/views/Services.vue"),
        },
        {
          name: "booking",
          path: "/booking",
          component: () => import("@/views/Booking.vue"),
        },
        {
          name: "reviews",
          path: "/reviews",
          component: () => import("@/views/Reviews.vue"),
        },
        {
          name: "contact",
          path: "/contact",
          component: () => import("@/views/Contact.vue"),
        },
        {
          name: "pricing",
          path: "/pricing",
          component: () => import("@/views/Pricing.vue"),
        },
        {
          name: "ads",
          path: "/ads",
          component: () => import("@/views/Ads.vue"),
        },
      ],
    },
  ],
});
