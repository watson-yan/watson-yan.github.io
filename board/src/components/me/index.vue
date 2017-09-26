<template>
  <div class="me">
    <header>
      <section class="center">
        <img class="avatar" src="../../assets/avatar.png" alt="" width="80" height="80">
      </section>
      <p class="links center">
        <router-link to="/me/download" :class="{active: $route.fullPath=='/me' || $route.fullPath=='/me/download'}" tag="a">我的下载</router-link>
        <router-link to="/me/collect" :class="{active: $route.fullPath=='/me/collect'}" tag="a">我的收藏</router-link>
        <router-link to="/me/record" :class="{active: $route.fullPath=='/me/record'}" tag="a">VIP记录</router-link>
      </p>
    </header>
    <article>
      <router-view></router-view>
    </article>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.me {
  header{
    background: #000;
    &>section {
      padding: 30px 0 10px 0;
      .avatar {
        border-radius: 100%;
      }
    }
    .links {
      margin: 0;
      padding: 15px 0;
      a {
        margin: 0 30px;
        color: #fff;
        text-decoration: none;
        &.active {
          color: #fec309;
        }
      }
    }
  }
}
</style>