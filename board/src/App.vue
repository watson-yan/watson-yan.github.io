<template>
  <div id="app">
    <header>
      <div class="logo">
        <a href="/"><img src="./assets/logo.png"></a>
      </div>
      <nav v-if="activeNav=='MENU'" class="menu-nav">
        <ul>
          <li>
            <router-link :class="{active: $route.fullPath=='/ad-template'}" 
              to="/ad-template" tag="a">广告模板</router-link>
          </li>
          <li>
            <router-link :class="{active: $route.fullPath=='/taobao'}" 
             to="/taobao" tag="a">电商淘宝</router-link>
          </li>
          <li>
            <router-link :class="{active: $route.fullPath=='/document'}" 
             to="/document" tag="a">办公文档</router-link>
          </li>
        </ul>
      </nav>
      <nav v-if="activeNav=='SEARCH'" class="search-nav">
        <input class="input"
           type="text" 
           style="width: 380px; padding-right: 25px;"
           placeholder="请输入你想要搜索的关键字">&nbsp;
        <i class="iconfont icon-search primary" 
            style="position: absolute; left: 355px; font-size: 18px;cursor: pointer;"></i>
        <span @click="activeNav='MENU'"
            style="cursor: pointer; font-size: 14px;">取消</span>
      </nav>
      <nav v-if="activeNav=='DETAIL'" class="detail-nav">
      
      </nav>
      <div class="option-nav">
        <template v-if="activeNav!='SEARCH'">
          <span class="primary" style="cursor: pointer;">
          <i class="iconfont icon-king" style="font-size: 24px;"></i>
            立享原创·放心商用
          </span>
          <i @click="activeNav='SEARCH'" 
            class="iconfont icon-search" 
            style="margin: 0 15px;font-size: 20px;cursor: pointer;"></i>
        </template>
        <template v-if="logined">
          <div class="logined-panel">
            <img class="avatar" src="./assets/avatar.png" width="45" height="45">
            <div class="user-panel">
              <ul>
                <li>
                  Watson
                </li>
                <li style="border-bottom: 1px solid #cacaca;">
                  ID: 0018
                </li>
                <li>
                  <router-link to="/me/download" tag="a">我的下载</router-link tag="a">
                </li>
                <li>
                  <router-link to="/me/collect" tag="a">我的收藏</router-link tag="a">
                </li>
                <li style="border-bottom: 1px solid #cacaca;">
                  <router-link to="/me/record" tag="a">VIP记录</router-link tag="a">
                </li>
                <li>
                  <a>退出</a>
                </li>
              </ul>
            </div>
          </div>
        </template>
        <template v-else>
          <button @click="logined=!logined" class="login-btn">
            登录/注册
          </button>
        </template>
      </div>
    </header>
    <article>
      <router-view></router-view>
      <footer>
        <p class="primary" style="font-size: 20px;">
          <i class="iconfont icon-king" style="font-size: 30px;"></i>
          立享原创 · 放心商用
        </p>
        <p>友情链接：
          <a class="friend-link">猪八戒</a>
          <a class="friend-link">iconfont</a>
          <a class="friend-link">优设网</a>
          <a class="friend-link">海洛创意</a>
          <a>申请友情链接请联系QQ：2</a>
        </p>
        <p>Copyright © 2017 图图 沪ICP备 17028-2 用时0.0477 0.173秒</p>
      </footer>
      <section class="suspension-panel">
        <div class="service">
          <p>
            <i class="iconfont icon-message" style="font-size: 18px;"></i>
          </p>
          <p style="font-size: 12px;">联系客服</p>
        </div>
        <div class="back2top" @click="back2top" style="display: block;">
          <i class="iconfont icon-arrow-up" style="font-size: 26px;"></i>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      logined: false,
      activeNav: 'MENU'
    }
  },
  methods: {
    back2top() {
      window.document.body.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
