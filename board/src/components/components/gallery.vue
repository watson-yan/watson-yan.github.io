<template>
  <div class="gallery-box">
    <router-link v-for="(item,index) of list"
      to="/detail" :key="index" class="gallery-wrap" tag="section">
      <div class="item shadow" :style="{backgroundImage: 'url(http://pic.ibaotu.com/00/33/23/39A888piCp3d.jpg-0.jpg!w340)'}">
        <div class="mask">
          <div class="btn-group">
            <div class="btn">
                <i class="iconfont icon-like"></i>
            </div>
            <div class="btn">
              <i class="iconfont icon-download"></i>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    props: {
      list: {
        type: Array
      }
    },
    data() {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  .gallery-box {
    margin: 0 -25px;
    display: flex;
    flex-wrap: wrap;
    .gallery-wrap {
      width: 33.3%;
      padding: 25px;
      height: 512px;
      box-sizing: border-box;
      .item {
        position: relative;
        height: 100%;
        background: #fff;
        border-radius: 5px;
        background-size: cover;
        background-position: center;
        cursor: pointer;
        &:hover {
          .mask {
            display: block;
          }
        }
        .mask {
          display: none;
          height: 100%;
          border-radius: 5px;
          background: rgba(0, 0, 0, .5);
          .btn-group {
            position: absolute;
            padding: 10px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 70px;
            background: rgba(255, 255, 255, 0.4);
            .btn {
              display: inline-block;
              width: 50px;
              height: 50px;
              text-align: center;
              line-height: 50px;
              background: #fec309;
              border-radius: 100%;
              cursor: pointer;
              &:hover {
                color: #fff;
              }
              i {
                font-size: 24px;
              }
            }
          }
        }
      }
    }
  }
</style>