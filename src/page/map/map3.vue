<template>
  <div id="map">
    <my-head></my-head>
    <Breadcrumb separator=">">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem to="/maplist">数据视图</BreadcrumbItem>
      <BreadcrumbItem>数据详情</BreadcrumbItem>
    </Breadcrumb>
    <h1>全网流量地图 （图例）</h1>
    <h2>网络部 <span>2017-06-30 13:00</span></h2>
    <div class="map">
      <div id="china-map-content">

      </div>
    </div>
    <my-foot></my-foot>
  </div>
</template>

<script>
import myHead from '../../components/common/header-show.vue'
import myFoot from '../../components/common/footer.vue'
import echarts from 'echarts'
import china from 'echarts/map/js/china'
import {echartData} from '../../assets/js/data'
var geoCoordMap = {
  '上海': [121.4648,31.2891],
  '新疆': [87.9236,43.5883],
  '甘肃': [103.5901,36.3043],
  '北京': [116.4551,40.2539],
  '江苏': [118.8062,31.9208],
  '广西': [108.479,23.1152],
  '江西': [116.0046,28.6633],
  '安徽': [117.29,32.0581],
  '内蒙': [111.4124,40.4901],
  '黑龙江': [127.9688,45.368],
  '天津': [117.4219,39.4189],
  '山西': [112.3352,37.9413],
  '广东': [113.5107,23.2196],
  '四川': [103.9526,30.7617],
  '西藏': [91.1865,30.1465],
  '云南': [102.9199,25.4663],
  '浙江': [119.5313,29.8773],
  '湖北': [114.3896,30.6628],
  '辽宁': [123.1238,42.1216],
  '山东': [117.1582,36.8701],
  '海南': [110.3893,19.8516],
  '河北': [114.4995,38.1006],
  '福建': [119.4543,25.9222],
  '青海': [101.4038,36.8207],
  '陕西': [109.1162,34.2004],
  '贵州': [106.6992,26.7682],
  '河南': [113.4668,34.6234],
  '重庆': [107.7539,30.1904],
  '宁夏': [106.3586,38.1775],
  '吉林': [125.8154,44.2584],
  '湖南': [113.0823,28.2568],
};
let cityData = ()=>{
  let array = [];
  Object.keys(geoCoordMap).map((i)=>{
    array.push({name:i});
  });
  return array;
}
let _tempData = ()=>{
  let array = [];
  let _temp = [];
  Object.keys(geoCoordMap).map((i)=>{
    _temp.push(i);
  });
  for(let i of _temp){
    for(let j of _temp){
      if(i!=j){
        array.push([{name:i},{name:j,value:parseInt(Math.random()*100)}])
      }
    }
  }
  return array;
}
let BJData = _tempData()
let convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i];
    var fromCoord = geoCoordMap[dataItem[0].name];
    var toCoord = geoCoordMap[dataItem[1].name];
    var value = data[1].value;
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        coords: [fromCoord, toCoord],
        value: value
      });
    }
  }
  return res;
};

var color = '#a6c84c';
var series = [
  {
    name: '全网CDN流量',
    type: 'lines',
    zlevel: 1,
    effect: {
      show: true,
      period: 6,
      trailLength: 0.7,
      color: '#fff',
      symbol: 'arrow',
      symbolSize: 3
    },
    lineStyle: {
      normal: {
        width: 0,
        curveness: 0.2
      }
    },
    data: convertData(BJData)
  },
  {
    name: '全网CDN流量',
    type: 'lines',
    zlevel: 2,
    symbol: ['none'],
    symbolSize: 10,
    effect: {
      show: true,
      period: 6,
      trailLength: 0,
      smooth:true,
      symbol: ['none', 'circle'],
      symbolSize: 1
    },
    lineStyle: {
      normal: {
        color: color,
        width: 1,
        opacity: 1,
        curveness: 0.2
      }
    },
    tooltip : {
      trigger: 'item',
      formatter: function (obj) {
        return `<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">${obj.seriesName}</div>
                            From： ${obj.data.fromName} To ${obj.data.toName}<br />流量：${BJData[obj.dataIndex][1].value}Gbps`
      }
    },
    data: convertData(BJData)
  },
  {
    name: '全网CDN流量',
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
      brushType: 'stroke',
      scale: 3.5
    },
    label: {
      normal: {
        show: true,
        position: 'right',
        formatter: '{b}'
      }
    },
    symbolSize: 4,
    itemStyle: {
      normal: {
        color: color
      }
    },
    tooltip : {
      trigger: 'item',
      formatter: function (obj) {
        var value = obj.value;
        return `<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 16px;padding-bottom: 7px;margin-bottom: 7px">
                            ${obj.seriesName}
                        </div>
                        ${obj.name}
                        `
      }
    },
    data: cityData().map(function (dataItem) {
      return {
        name: dataItem.name,
        value: geoCoordMap[dataItem.name]
      };
    })
  }];

let option = {
  backgroundColor: '#1b1b1b',
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false
      }
    },
    roam: true,
    itemStyle: {
      normal: {
        areaColor: '#1b1b1b',
        borderColor: 'rgba(100,149,237,1)'
      },
      emphasis: {
        areaColor: '#1b1b1b'
      }
    }
  },
  tooltip : {
    trigger: 'item',
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    top:'35%',
    right: '1%',
    feature: {
      dataView: {readOnly: true},
      restore: {},
      saveAsImage: {}
    }
  },
  dataRange: {
    show: false,
    min : 0,
    max : 100,
    color: ['lime'],
    textStyle:{
      color:'#fff'
    }
  },
  series: series
};
export default {
  components:{
      myHead,
      myFoot
  },
  methods:{
    drawmap(id){
      this.chart = echarts.init(document.getElementById(id));
      this.chart.setOption(option);
    }
  },
  mounted(){
    this.drawmap('china-map-content');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../assets/css/map.less";
#china-map-content{
  background: #1b1b1b;
  width: 100%;
  height: 600px;
  margin-bottom: 130px;
}
</style>
