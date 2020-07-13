import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '@/store'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogin = store.state.main.isLogin;
  if (to.name !== 'authorization' && !isLogin) next({ name: 'authorization' })
  else if (to.name === 'authorization' && isLogin){
    next({ name: 'login-history' })
  } else {
    next();
  }
})

export default router;
