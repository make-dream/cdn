/**
 * Created by Administrator on 2018/5/15.
 */
import * as types from '../mutation-types'

export default {
  loginSet({commit},val){
    commit(types.LOGIN_IN,val)
  },
  loginout({commit}){
    commit(types.LOGIN_OUT);
  },
  setuserrolelist({commit},val){
    commit(types.USER_ROLE_NAVLIST)
  },
  removeuserrolelist({commit}){
    commit(types.REMOVE_USER_ROLE_NAVLIST);
  },
  pathToRefresh({commit},val){
    commit(types.PATH_TO_REFRESH,val);
  }
}
