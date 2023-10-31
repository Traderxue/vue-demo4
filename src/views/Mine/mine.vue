<script setup>
import { ref } from "vue";

const assetsData = ref([
    {
        logo:"https://etherscan.io/token/images/bnb_28_2.png",
        type:"BTC",
        free:"0.000",
        balance:"0.000"
    },
    {
        logo:"https://etherscan.io/token/images/trontrx_32.png",
        type:"BTC",
        free:"0.000",
        balance:"0.000"
    },
    {
        logo:"https://etherscan.io/token/images/chainlinktoken_32.png",
        type:"BTC",
        free:"0.000",
        balance:"0.000"
    },
    {
        logo:"https://etherscan.io/token/images/wbtc_28.png",
        type:"BTC",
        free:"0.000",
        balance:"0.000"
    },
    {
        logo:"https://etherscan.io/token/images/trontrx_32.png",
        type:"BTC",
        free:"0.000",
        balance:"0.000"
    },
    {
        logo:"https://etherscan.io/token/images/chainlinktoken_32.png",
        type:"BTC",
        free:"0.000",
        balance:"0.000"
    },
    {
        logo:"https://etherscan.io/token/images/wbtc_28.png",
        type:"BTC",
        free:"0.000",
        balance:"0.000"
    },
])
</script>

<template>
  <div class="mine">
    <div class="top">
      <span class="assets">总资产估值</span>
      <span class="num">59.62 USDT</span>
      <div class="btn">
        <button>充值</button>
        <button>提现</button>
        <button>资金划转</button>
      </div>
    </div>
    <div class="box">
      <p class="assets_p">资产分布</p>
      <div class="asset">
        <div class="title">
          <span>种类</span>
          <span>冻结</span>
          <span>余额</span>
          <span>操作</span>
        </div>
        <div class="asset_box">
          <div class="per" v-for="(item,index) in assetsData" :key="index">
            <span>
              <img :src="item.logo" alt="" />
              <p>{{item.type}}</p>
            </span>
            <span>{{item.free}}</span>
            <span>{{item.balance}}</span>
            <span><button>提现</button></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mine {
  width: auto;
  height: auto;
  background: #364f6b;
  padding: 40px 10%;
  margin-top: 20px;
  .top {
    width: auto;
    height: 125px;
    margin-top: 20px;
    color: #fff;
    position: relative;
    .assets {
      font-size: 22px;
      font-weight: 600;
    }
    .num {
      font-size: 17px;
      font-weight: 600;
      color: #FFF;
    }
    span {
      margin-bottom: 30px;
      display: block;
    }
    .btn {
      position: absolute;
      right: 20%;
      top: 30%;
      button {
        width: 80px;
        height: 35px;
        margin: 10px;
        background: #1650f4;
        color: #fff;
        border: 0;
        cursor: pointer;
      }
    }
  }
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    color: #fff;
    .assets_p {
      font-size: 22px;
      font-weight: 600;
    }
    .asset {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      margin: 20px 0px;
      .title {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        span {
          width: 33%;
        }
      }
      .asset_box {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        div {
          padding: 10px 0px;
          margin: 15px 0px;
          display: flex;
          justify-content: space-around;
          span {
            width: 33%;
            display: flex;
            align-items: center;
            text-align: center;
            cursor: pointer;
            img {
              width: 35px;
              height: 35px;
              padding-right: 10px;
            }
            button{
                width: 70px;
                height: 35px;
                border: 0;
                background: #1650F4;
                color: #FFF;
                cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>