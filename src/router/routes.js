import AuthPage from '@/components/AuthPage.vue';
import LoginHistoryPage from '@/components/LoginHistoryPage.vue';

const routes = [
  {
    path: '/authorization',
    component: AuthPage,
    name: 'authorization',
    meta: { title: 'Authorization' },
  },
  {
    path: '/login-history',
    component: LoginHistoryPage,
    name: 'login-history',
    meta: { title: 'Login history' },
  },
]

export default routes;