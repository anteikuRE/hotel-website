import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";

import App from "./App.vue";
import LandingPage from "./elements/LandingPage.vue";
import CatalogPage from "./elements/CatalogPage.vue";

const store = createStore({
  state() {
    return {
      cartImg: 1,
    };
  },
  mutations: {
    scroll(_, element) {
      const DomEl = element;
      DomEl.forEach((element) => {
        const observer = new IntersectionObserver((e) => {
          e.forEach((en) => {
            if (en.isIntersecting) {
              en.target.style.opacity = "1";
            }
          });
        });
        observer.observe(element);
      });
    },
    scrollImg(_, element) {
      const DomEl = element;
      DomEl.forEach((element) => {
        const observer = new IntersectionObserver((e) => {
          e.forEach((en) => {
            if (en.isIntersecting) {
              en.target.addEventListener("load", function () {
                en.target.classList.remove("lazy_img");
              });
              en.target.src = en.target.dataset.src;
            }
          });
        });
        observer.observe(element);
      });
    },
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/landing" },
    {
      name: "landing",
      path: "/landing",
      components: { default: LandingPage },
    },
    {
      name: "catalog",
      path: "/catalog",
      components: { default: CatalogPage },
    },
  ],
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
