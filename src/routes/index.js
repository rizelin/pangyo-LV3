import Vue from 'vue';
import VueRouter from 'vue-router';
import NewView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect: '/news'
    },
    {
      path:'/news',
      component: NewView,
    },
    {
      path:'/ask',
      component: AskView,
    },
    {
      path:'/jobs',
      component: JobsView,
    },
    {
    path: '/user',
    components: UserView,
    },
  ]
});