<template>
  <div id="map">
    <my-head></my-head>
    <Breadcrumb separator=">">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem to="/maplist">数据视图</BreadcrumbItem>
      <BreadcrumbItem>数据详情</BreadcrumbItem>
    </Breadcrumb>
    <h1>全网统建CDN、IDC、统建Cache、省建Cache、省建OTT业务流量分析日报</h1>
    <h2>网络部 <span>{{createTimeView}}</span></h2>
    <div class="map">
      <div id="map-content">
        <h3>一、统建CDN业务分析</h3>
        <div class="map-wrapper">
          <div id="map-item-1"></div>
          <p class="data-info">数据来源：网络部 {{createTimeView}} —— {{createTimeView}}</p>
        </div>
        <h3>二、统建Cache业务分析</h3>
        <div class="map-wrapper">
          <div id="map-item-2"></div>
          <p class="data-info">数据来源：网络部 {{createTimeView}} —— {{createTimeView}}</p>
        </div>
        <h3>三、IDC 业务分析</h3>
        <div class="map-wrapper">
          <div id="map-item-3"></div>
          <p class="data-info">数据来源：网络部 {{createTimeView}} —— {{createTimeView}}</p>
        </div>
        <h3>四、省建Cache 业务分析</h3>
        <div class="map-wrapper">
          <div id="map-item-4"></div>
          <p class="data-info">数据来源：网络部 {{createTimeView}} —— {{createTimeView}}</p>
        </div>
        <h3>五、OTT 业务分析</h3>
        <div class="map-wrapper mb-60">
          <div id="map-item-5"></div>
          <p class="data-info">数据来源：网络部 {{createTimeView}} —— {{createTimeView}}</p>
        </div>
      </div>
    </div>
    <my-foot></my-foot>
  </div>
</template>

<script>
import echarts from 'echarts'
import myHead from '../../components/common/header-show.vue'
import myFoot from '../../components/common/footer.vue'
import {echartData} from '../../assets/js/data'
const color = {
  lightblue: '#85cef4',
  blue: '#4ba3fa',
  lightgreen: '#b7e331',
  yellow: '#ffd957',
  orange: '#ff944c',
  envy: '#96afff',
  violet: '#986bff',
  red: '#46d185',
  green: '#ec5845'
}
export default {
  data(){
    return{
      createTimeView:'',
      chart:null,
      width: '1200px'
    }
  },
  components:{
    myHead,
    myFoot
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../assets/css/map.less";
  #map-item-1,#map-item-2,#map-item-3,#map-item-4,#map-item-5{
    display: none;
    width: 1024px;
    height: 480px;
    margin: 0 auto;
  }
  #map-item-5{
    margin-bottom: 30px;
  }
  .data-info{
    width: 1024px;
    margin: 10px auto 0 auto;
    text-align: right;
  }
</style>
