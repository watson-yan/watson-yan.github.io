<template>
  <div class="detail">
    <div class="information">
      <div class="cover">
        <img src="http://pic.ibaotu.com/00/33/23/39A888piCp3d.jpg-0.jpg!w340" alt="" width="500">
      </div>
      <div class="content">
        <p class="name">简约七夕情侣海报活动促销活动设计</p>
        <section class="option">
          <p>
            <button class="btn-primary">
              <i class="iconfont icon-download"></i>
              免费下载
            </button>
          </p>
          <p>
            <button>
               &#12288;<i class="iconfont icon-like"></i>
              收藏&#12288;
            </button>
          </p>
          <p class="count">
            <span>
              <i class="iconfont icon-download"></i> 9999
            </span>
            <span>
              <i class="iconfont icon-like"></i> 20000
            </span>
            <span>
              <i class="icon iconfont icon-eye"></i> 999999
            </span>
          </p>
        </section>
        <section class="info">
          <div>
            <p>尺寸：1920*2329像素</p>
            <p>长传时间：2017-09-10</p>
          </div>
          <div>
            <p>文件格式：PSD</p>
            <p>图片编号：12345678</p>
          </div>
        </section>
        <section class="promise">
          <div>
            <p>
              <i class="iconfont icon-quality"></i>
            </p>
            <p>原创品质</p>
          </div>
          <div>
            <p>
              <i class="iconfont icon-bussiness"></i>
            </p>
            <p>放心商用</p>
          </div>
          <div>
            <p>
              <i class="iconfont icon-protect"></i>
            </p>
            <p>贴心服务</p>
          </div>
        </section>
      </div>
    </div>
    <h3 class="title center">
      <span>猜你喜欢</span>
    </h3>
    <gallery :list="new Array(3)"></gallery>

    <p class="label">
      标签：
      <span>海报设计</span>
      <span>海报广告</span>
      <span class="active">海报广告</span>
    </p>
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
.detail {
  max-width: 1080px;
  margin: 0 auto;
  padding: 35px 0 50px 0;
  .information {
    display: flex;
    padding-bottom: 40px;
    .cover {
      width: 70%;
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
      img {
        max-width: 100%;
      }
    }
    .content {
      width: 30%;
      .name {
        margin-bottom: 30px;
        color: #666;
      }
      .option {
        padding-bottom: 10px;
        border-bottom: 1px solid #cacaca;
        button{
          padding: 10px 30px;
          width: 100%;
          font-size: 14px;
          background: #fff;
          border: 1px solid rgb(249, 202, 46);
          border-radius: 4px;
          cursor: pointer;
          &.btn-primary {
            background: #fec309;
            &:active {
              background: #ffcc00;
            }
          }
          &.active {
            color: #fec309;
          }
        }
        .count {
          display: flex;
          justify-content: space-between;
          color: #999;
          font-size: 12px;
        }
      }
      .info {
        display: flex;
        padding: 10px 0;
        font-size: 12px;
        color: #666;
        border-bottom: 1px solid #cacaca;
        &>div {
          flex: 1 0;
        }
      }
      .promise {
        display: flex;
        padding: 10px 0;
        justify-content: space-between;
        text-align: center;
        p {
          margin: 5px;
          color: #fec309;
          font-size: 12px;
        }
        i {
          font-size: 35px;
        }
      }
    }
  }
  .title {
    span {
      display: inline-block;
      padding: 20px 150px;
      color: #444;
      border-bottom: 1px solid #cacaca;
    }
  }
  .label {
    font-size: 12px;
    span {
      margin: 10px;
      padding: 3px 10px;
      border: 1px solid #333;
      border-radius: 3px;
      &.active {
        color: #fec309;
        border-color: #fec309;
      }
    }
  }
}
</style>