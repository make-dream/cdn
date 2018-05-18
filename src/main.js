// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'
import store from './store/store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
Vue.prototype.$http = axios;
Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  let loginStatus =JSON.parse(window.localStorage.getItem('user')) || null;
  let real_path=to.path.split('/')[1];  //当前的路径
  /*console.log(to)*/
  console.log(real_path)
  store.dispatch('pathToRefresh',real_path);
  if(!to.meta.browse){
    if(loginStatus){
      next();
    }else{
      if(real_path=='demo'){
        next();
      }
      if(real_path=='resetPwd'){
        next();
      }
      if(real_path=="sessionTimeout"){
        next();
      }else{
        next({
          path: '/login',
        })
      }
    }
  }else{
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})

