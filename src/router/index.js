import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import GamePage from "@/views/GamePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: `/`,
    component: LoginPage,
    meta: [
      {
        title: `Login Page`,
      },
      {
        name: `description`,
        content: `This is the login page`,
      },
      {
        name: `author`,
        content: `Gabriel Santillo`,
      },
    ],
  },
  {
    path: `/gamePage`,
    component: GamePage,
    meta: [
      {
        title: `Game Page`,
      },
      {
        name: `description`,
        content: `This is the game page where you make your wager and see if you have luck`,
      },
      {
        name: `author`,
        content: `Gabriel Santillo`,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  let current_meta_tags = document.querySelectorAll(`meta`);
  for (let i = 0; i < current_meta_tags.length; i++) {
    current_meta_tags[i].remove();
  }

  let new_meta_tags = to[`meta`];
  document.querySelector(`title`)[`innerText`] = new_meta_tags[0][`title`];

  for (let i = 1; i < new_meta_tags.length; i++) {
    document.querySelector(`head`).insertAdjacentHTML(
      `beforeend`,
      `
    <meta name="${new_meta_tags[i][`name`]}" content="${
        new_meta_tags[i][`content`]
      }">
    `
    );
  }

  document.querySelector(`head`).insertAdjacentHTML(
    `afterbegin`,
    `
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  `
  );
  from;
  next();
});

export default router;
