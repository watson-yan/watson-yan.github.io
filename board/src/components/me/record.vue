<template>
  <div class="my-record">
    <table class="table" border="">
      <thead>
        <th>VIP类型</th>
        <th>开通方式</th>
        <th>下载权限</th>
        <th>交易时间</th>
        <th>到期时间</th>
      </thead>
      <tr>
        <td>普通VIP</td>
        <td>微信制度</td>
        <td>无限下载</td>
        <td>2018-09-09</td>
        <td>2019-09-09</td>
      </tr>
    </table>

    <section class="center no-data">
      <p>我还是空的 ~ </p>
      <img src="../../assets/no-data.png" width="150" height="150">
    </section>
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
.my-record {
  max-width: 1080px;
  margin: 0 auto;
  padding: 40px 0 50px 0;
  .no-data {
    padding: 50px 0;
    p {
      margin: 0;
    }
  }
}
</style>