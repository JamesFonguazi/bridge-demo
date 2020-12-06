import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AdminRoutes from './routes/Admin/index';
import Login from './views/Login.vue'
import firebase from "firebase";
import "firebase/auth";
import Signup from './views/Signup.vue'

Vue.use(Router);

const baseRoutes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  }
];
const routes = [...baseRoutes, ...AdminRoutes];


const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  // eslint-disable-next-line no-console
  console.log("isauthenticated", isAuthenticated);
  if (requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router