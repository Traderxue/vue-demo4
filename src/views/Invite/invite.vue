<script setup>
import { ref } from "vue";

const navData = ref([
  {
    url: "https://static.okx.com/cdn/assets/imgs/239/1E07999D241AE9A9.png",
    invite: "邀请好友",
    explain: "好友需下载 APP 并注册账户",
  },
  {
    url: "https://static.okx.com/cdn/assets/imgs/239/B1CD51B3CDC64289.png",
    invite: "好友登录APP",
    explain: "好友登录 App 且完成身份验证后，双方均可解锁盲盒",
  },
  {
    url: "https://static.okx.com/cdn/assets/imgs/239/6733DF9C14ACB1B5.png",
    invite: "领取奖励盲盒",
    explain: "打开APP，领取您的数字货币盲盒",
  },
]);
</script>

<template>
  <div class="invite">
    <div class="top">
      <h3>立即领取价值6000元的数字盲盒</h3>
      <button>登录领取盲盒</button>
      <img src="@/assets/bg_box.png" alt="" />
    </div>
    <div class="main">
      <h3>如何领取数字礼盒</h3>
      <div class="nav">
        <div v-for="(item, index) in navData" :key="index">
          <img :src="item.url" alt="" />
          <span>{{ item.invite }}</span>
          <p>{{ item.explain }}</p>
        </div>
      </div>
    </div>
    <div class="rules">
      <h3>奖励规则</h3>
    <div class="rule_box">
        <span>1. 邀请您的好友加入欧易，您可获得最高价值60,000元数字货币盲盒。</span>
        <p>第一步：进入“邀请好友”页面，将您的邀请链接或邀请码分享给好友。</p>
        <p>第二步：好友成功注册后，在注册 7 天内登录欧易 App 完成身份认证，您和好友各获得一个盲盒。</p>
        <p>第三步：好友在注册 14 天内，单次买币或充值大于等于 300 元，您和好友再各得一个盲盒。</p>
        <span>2. 每个盲盒包含最高价值 60,000元 的数字货币，盲盒中包含 BTC、ETH、DOT 等数字货币和返佣卡。数字货币奖励将在开启盲盒 1 小时内发放至您的资金账户中，您可前往“资产-资金动态”查收您的奖励。</span>
        <span>3. 盲盒数量不设上限，邀请的好友越多，您获得盲盒越多，快去邀请更多的好友吧！</span>
        <span>4. 子账户不可参与该活动。</span>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.invite {
  width: auto;
  height: 100%;
  background: #364f6b;
  .top {
    width: auto;
    height: 300px;
    padding: 40px 10%;
    margin: 20px auto;
    position: relative;
    h3 {
      font-size: 33px;
      color: #fff;
      margin: 20px 0px;
    }
    img {
      position: absolute;
      right: 20%;
      top: 0;
      width: 300px;
      height: 300px;
    }
    button {
      width: 25%;
      height: 40px;
      margin-top: 30px;
      border: 0;
      border-radius: 25px;
      font-weight: 600;
      font-size: 18px;
    }
  }
  .main {
    width: auto;
    height: auto;
    padding: 40px 10%;
    h3 {
      text-align: center;
      font-size: 30px;
      color: #ccc;
      padding-bottom: 30px;
    }
    .nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      div {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        span {
          font-weight: 600;
          font-size: 20px;
          padding: 10px 0px;
          color: #f6f6f6;
        }
        p {
          font-weight: 600;
          font-size: 14px;
          color: #f6f6f6;
        }
      }
    }
  }
  .rules{
    width: auto;
    height: auto;
    padding: 40px 10%;
    h3{
        font-size: 25px;
        color: #FFF;
        padding-bottom: 20px;
    }
    .rule_box{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        font-size: 14px;
        padding-bottom: 150px;
        color: #fff;
        span{
            padding: 15px 0px;
        }
    }
  }
}
</style>