<template>
  <div class="ad-template">
      <div class="banner">
        用途：&#12288;
        <span @click="use='ALL'" :class="{active: use=='ALL'}">全部</span>
        <span @click="use='SALE'" :class="{active: use=='SALE'}">促销海报</span>
        <span @click="use='FOOD'" :class="{active: use=='FOOD'}">美食海报</span>
        <span @click="use='TRAVEL'" :class="{active: use=='TRAVEL'}">旅游海报</span>
        <span @click="use='REALTY'" :class="{active: use=='REALTY'}">房地产海报</span>
      </div>
      <p class="order">
        <span @click="order='DEFAULT'" :class="{active: order=='DEFAULT'}">热门排序</span>
        <span @click="order='DOWNLOAD'" :class="{active: order=='DOWNLOAD'}">热门下载</span>
        <span @click="order='UPLOAD'" :class="{active: order=='UPLOAD'}">最新上传</span>
      </p>
      <gallery :list="new Array(9)"></gallery>

      <section style="padding: 30px 0 0 0;">
        <pagination :pn="1" :total="120"></pagination>
      </section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      use: 'ALL',
      order: 'DEFAULT'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ad-template {
  max-width: 1080px;
  margin: 0 auto;
  padding: 35px 0 50px 0;
  .banner {
    padding: 16px 30px;
    background: #fff;
    border-radius: 3px;
    font-size: 12px;
    span {
      margin: 0 15px;
      padding: 2px 12px;
      border-radius: 2px;
      cursor: pointer;
      &.active {
        background: #000;
        color: #fff;
      }
    }
  }
  .order {
    margin-bottom: 0;
    padding: 10px 30px 0 30px;
    font-size: 12px;
    span {
      margin-right: 30px;
      cursor: pointer;
      &.active {
        color: #fec309;
      }
    }
  }
}
</style>