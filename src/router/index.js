import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '../components/TaskList.vue';
import AddTask from '../components/AddTask.vue';
import Login from '../components/UserLogin.vue';
import UserRegister from '../components/UserRegister.vue';

const routes = [
  {
      path: '/',
      name: 'TaskList',
      component: TaskList,
      meta: { requiresAuth: true }
  },
  {
      path: '/add-task',
      name: 'AddTask',
      component: AddTask,
      meta: { requiresAuth: true }
  },
  {
      path: '/login',
      name: 'Login',
      component: Login
  },
  {
      path: '/register',
      name: 'Register',
      component: UserRegister
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;