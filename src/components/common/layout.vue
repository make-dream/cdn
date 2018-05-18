<template>
  <div id="content">
    <my-head></my-head>
    <div id="main">
     <my-nav></my-nav>
      <bread></bread>
      <!--<keep-alive>-->
      <div class="main">
        <router-view></router-view>
      </div>
      <!--</keep-alive>-->
    </div>
    <my-foot></my-foot>
  </div>
</template>

<script>
import myHead from '../../components/common/header.vue'
import myFoot from '../../components/common/footer.vue'
import myNav from '../../components/common/navShow.vue'
import bread from '../../components/common/bread.vue'
export default {
  components:{
      myHead,
      myFoot,
      myNav,
      bread
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
