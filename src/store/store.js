/**
 * Created by Administrator on 2018/5/15.
 */
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

import login from './login/index'
import page from './page/index'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    login,
    page
  }
})
