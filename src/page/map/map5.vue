<template>
  <div id="map">
    <my-head></my-head>
    <Breadcrumb separator=">">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem to="/maplist">数据视图</BreadcrumbItem>
      <BreadcrumbItem>数据详情</BreadcrumbItem>
    </Breadcrumb>
    <h1>全网统建CDN、IDC、统建Cache、省建Cache、省建OTT业务流量分析周报</h1>
    <h2>网络部 <span>{{createTimeView}}</span></h2>
    <div class="map">
      <div id="map-content">
        <h3>一、统建CDN业务分析</h3>
        <div class="map-wrapper">
          <div id="map-item-1"></div>
        </div>
        <h3>二、统建Cache业务分析</h3>
        <div class="map-wrapper">
          <div id="map-item-2"></div>
        </div>
        <h3>三、IDC 业务分析</h3>
        <div class="map-wrapper">
          <div id="map-item-3"></div>
        </div>
        <h3>四、省建Cache 业务分析</h3>
        <div class="map-wrapper">
          <div id="map-item-4"></div>
        </div>
        <h3>五、OTT 业务分析</h3>
        <div class="map-wrapper">
          <div id="map-item-5"></div>
        </div>
      </div>
    </div>
    <my-foot></my-foot>
  </div>
</template>

<script>
import myHead from '../../components/common/header-show.vue'
import myFoot from '../../components/common/footer.vue'
import {echartData} from '../../assets/js/data'
import echarts from 'echarts'
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
      createTimeView:''
    }
  },
  components:{
      myHead,
      myFoot
  },
  methods:{
    drawbar(id,columns,data1,data2,color) {
      this.chart = echarts.init(document.getElementById(id));
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          "axisPointer": {
            "type": "shadow"
          },
        },
        legend:{
          data:['入流量Gbps','出流量Gbps']
        },
        grid:{
          bottom:60,
          height:400
        },
        dataZoom:[
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 25,
          },
          {
            type: 'inside',
            xAxisIndex: [0],
            start: 1,
            end: 25
          },
        ],
        toolbox: {
          feature: {
            saveAsImage: {},
            dataView: {},
            magicType: {
              type: ['stack', 'tiled','line']
            },
            restore: {show: true}
          },
          right: 15,
          top: 10
        },
        grid: {
          left: '5%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            "axisLabel": {
              "interval": 0,
              "show": true,
              "splitNumber": 15,
              "textStyle": {
                "fontFamily": "微软雅黑",
                "fontSize": 12
              }
            },
            "data": columns
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '流量,Gbps',
            nameLocation: 'middle',
            nameGap:30
          }
        ],
        series: [
          {
            name: '入流量Gbps',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            itemStyle:{
              normal:{
                color: color[0]
              }
            },
            data: data1
          },
          {
            name: '出流量Gbps',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'insideTop'
              }
            },
            itemStyle:{
              normal:{
                color: color[1]
              }
            },
            data: data2
          }
        ]
      });
    },
    formatter(data){
      let obj = {
        trafficin:[],
        trafficout:[]
      };
      for(let item of data){
        obj.trafficin.push(item.trafficin);
        obj.trafficout.push(item.trafficout);
      }
      return obj;
    },
    formatterPro(data){
      let array = [];
      for(let item of data){
        array.push(item.province)
      }
      return array;
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/css/map.less";
#map-item-1,#map-item-2,#map-item-3,#map-item-4,#map-item-5{
  width: 1024px;
  height: 480px;
  margin: 0 auto;
  display: none;
}
#map-item-5{
  margin-bottom: 30px;
}
</style>
