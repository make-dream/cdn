/**
 * Created by Administrator on 2018/5/15.
 */
export const validatePass = (rule,value,callback) => {
  let regex = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)[0-9A-Za-z]{6,20}$/
  if(!regex.test(value)){
    callback(new Error('账号格式不正确'));
  }
  callback();
};
export const validateTel = (rule,value,callback) => {
  let regex = /^1[3|4|5|7|8|9]\d{9}$/
  if(!regex.test(value)){
    callback(new Error('手机号码格式不正确'));
  }
  callback();
}
export const validateRole = (rule,value,callback) => {

}
export const validataName = (rule,value,callback)=>{
  let regex = /^[a-zA-Z0-9]{6,50}$/;
  if(!regex.test(value)){
    callback(new Error('密码格式不正确'));
  }
  callback();
}
