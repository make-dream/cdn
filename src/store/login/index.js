/**
 * Created by Administrator on 2018/5/15.
 */

import actions from './action'
import getters from './getters'
import mutations from './mutations'

export default {
  state:{
    user_name:'',
    user_permission:'',
    logStatus:false,
    user_role_navlist:{},
    pathtorefresh:''
  },
  actions,
  getters,
  mutations
}
