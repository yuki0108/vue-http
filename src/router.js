import Vue from "vue";
import Router from "vue-router";
import Comments from "./views/Comments.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import store from "./store";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Comments,
      beforeEnte(to, from, next) {
        if (store.getters.idToken) {
          next('/');
        } else {
          next();
        }
      },
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
      beforeEnte(to, from, next) {
        if (store.getters.idToken) {
          next('/');
        } else {
          next();
        }
      },
    },
  ],
});
