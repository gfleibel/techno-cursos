import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import("../views/ContatoView.vue"),
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: () => import("../views/CursosView.vue"),
  },
  {
    path: "/cursos/:curso",
    name: "curso",
    component: () => import("../views/CursoView.vue"),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
