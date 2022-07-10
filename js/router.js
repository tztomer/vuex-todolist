import todoApp from './pages/todo-app.cmp.js';
import todoEdit from './pages/todo-edit.cmp.js';
import userProfile from './pages/user-profile.cmp.js';
import todoDetailsCmp from './pages/todo-details.cmp.js';

const routes = [
  {
    path: '/',
    component: todoApp,
  },
  {
    path: '/todo/edit/:todoId',
    component: todoEdit,
  },
  {
    path: '/todo/details/:todoId',
    component: todoDetailsCmp,
  },
  {
    path: '/todo/user/',
    component: userProfile,
  },
];

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
});
