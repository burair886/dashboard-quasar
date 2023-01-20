const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "Users",
        component: () => import("pages/UsersPage.vue"),
      },
      {
        path: "two",
        component: () => import("pages/twoPage.vue"),
      },
      {
        path: "three",
        component: () => import("pages/threePage.vue"),
      },
      {
        path: "inventory",
        component: () => import("pages/inventoryPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
