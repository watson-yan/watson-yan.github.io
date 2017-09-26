<template>
  <div class="home">
    <div style="height: 300px;">
      <slider :list="imgList"></slider>
    </div>
    <article>
      <h3 class="title center">
        <span>广告宣传</span>
      </h3>
      <div>
        <gallery :list="new Array(6)"></gallery>
        <p class="center">
          <router-link to="/ad-template" class="btn-more">昨日更新<span class="primary">699</span>张，去看看</router-link>
        </p>
      </div>

      <h3 class="title center">
        <span>电商淘宝</span>
      </h3>
      <div>
        <gallery :list="new Array(3)"></gallery>
        <p class="center">
          <router-link to="/taobao" class="btn-more">昨日更新<span class="primary">699</span>张，去看看</router-link>
        </p>
      </div>
      
      
      <h3 class="title center">
        <span>办公文档</span>
      </h3>
      <div>
        <gallery :list="new Array(3)"></gallery>
        <p class="center">
          <router-link to="/document" class="btn-more">昨日更新<span class="primary">699</span>张，去看看</router-link>
        </p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      imgList: [
        {imgUrl: '/static/imgs/cover1.jpg'},
        {imgUrl: '/static/imgs/cover2.jpg'},
        {imgUrl: '/static/imgs/cover3.jpg'},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
  &>article {
    max-width: 1080px;
    margin : 0 auto;
    padding-bottom: 30px;
    &>div {
      padding-bottom: 40px;
    }
    .title {
      span {
        display: inline-block;
        padding: 20px 150px;
        color: #444;
        border-bottom: 1px solid #cacaca;
      }
    }

    .btn-more {
      padding: 10px 100px;
      font-size: 14px;
      border: 1px solid #000;
      color: #000;
      background: #fff;
      border-radius: 5px;
      text-decoration: none;
      cursor: pointer;
      &:active {
        background: #000;
        color: #fff;
      }
    }
  }
}
</style>
