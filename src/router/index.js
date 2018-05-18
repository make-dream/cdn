import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/common/home.vue'
import Login from '../page/common/login.vue'
import Maplist from '../page/map/mapList.vue'
import Map1 from '../page/map/map1.vue'
import Map2 from '../page/map/map2.vue'
import Map3 from '../page/map/map3.vue'
import Map4 from '../page/map/map4.vue'
import Map5 from '../page/map/map5.vue'
import Forget from '../page/common/forget.vue'
import DeviceList from '../page/device/deviceList.vue'
import Container from '../components/common/layout.vue'
import DeviceEdit from '../page/device/deviceEdit.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: { browse: true }
    },
    {
      path: '/home',
      component: Home,
      meta: { browse: true }
    },
    {
      path: '/login',
      component: Login,
      meta: { browse: true }
    },
    {
      path: '/forget',
      component: Forget,
      meta: { browse: true }
    },
    {
      path: '/mapList',
      component: Maplist,
      meta: { browse: true }
    },
    {
      path: '/maplist/map1',
      component: Map1,
      meta: { browse: true }
    },
    {
      path: '/maplist/map2',
      component: Map2,
      meta: { browse: true }
    },
    {
      path: '/maplist/map3',
      component: Map3,
      meta: { browse: true }
    },
    {
      path: '/maplist/map4',
      component: Map4,
      meta: { browse: true }
    },
    {
      path: '/maplist/map5',
      component: Map5,
      meta: { browse: true }
    },
    {
      path: '/device',
      meta: { name: '设备管理' },
      component:Container,
      children:[
        {
          path:'',
          redirect: ()=>{
            return 'deviceList'
          }
        },
        {
          path: 'deviceList',
          component: DeviceList,
          meta: {name: '设备列表'},
        },
        {
          path: 'deviceEdit',
          component: DeviceEdit,
          meta: {name: '设备列表'},
        }
      ]
    }
  ]
})
