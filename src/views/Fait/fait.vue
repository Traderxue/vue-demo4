<script setup>
import { ref } from "vue";

const shopList = ref([
    {
        title:"比特商家",
        credit:"信用100%",
        num:"50000",
        limit:"1000-20000",
        unit_price:"7.19"
    },
    {
        title:"比特商家",
        credit:"信用100%",
        num:"80000",
        limit:"5000-20000",
        unit_price:"7.2"
    },
    {
        title:"比特商家",
        credit:"信用100%",
        num:"80000",
        limit:"5000-20000",
        unit_price:"7.17"
    },
    {
        title:"比特商家",
        credit:"信用100%",
        num:"80000",
        limit:"5000-20000",
        unit_price:"7.2"
    },
    {
        title:"比特商家",
        credit:"信用100%",
        num:"80000",
        limit:"5000-20000",
        unit_price:"7.17"
    },
    {
        title:"比特商家",
        credit:"信用100%",
        num:"50000",
        limit:"1000-20000",
        unit_price:"7.19"
    },
    {
        title:"比特商家",
        credit:"信用100%",
        num:"80000",
        limit:"5000-20000",
        unit_price:"7.2"
    },
    {
        title:"比特商家",
        credit:"信用100%",
        num:"80000",
        limit:"5000-20000",
        unit_price:"7.17"
    },
    {
        title:"比特商家",
        credit:"信用100%",
        num:"80000",
        limit:"5000-20000",
        unit_price:"7.2"
    },
    {
        title:"比特商家",
        credit:"信用100%",
        num:"80000",
        limit:"5000-20000",
        unit_price:"7.17"
    },
])
</script>

<template>
  <div class="fait">
    <div class="box">
      <div class="top">
        <span>商家</span>
        <span>数量</span>
        <span>限额</span>
        <span>单价</span>
        <span>支付方式</span>
        <span>操作</span>
      </div>
      <div class="main">
        <div class="shop" v-for="(item,index) in shopList" :key="index">
          <span class="shop_span">
            <img src="@/assets/acvator.png" alt="">
            <div>
                <span>{{item.title}}</span>
                <p class="parcent">{{item.credit}}</p>
            </div>
          </span>
          <span style="color: #00b8a9;">{{item.num}} USDT</span>
          <span style="color: #30e3ca;">{{item.limit}} CNY</span>
          <span style="color: #f5f5f5;">{{item.unit_price}} CNY</span>
          <span class="material-symbols-outlined credit"> credit_card </span>
          <span class="buy">
            <button>购买</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fait {
  width: 80%;
  padding: 0px 10%;
  height: 100%;
  margin-top: 20px;
  background: #364f6b;
  color: #fff;
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .top {
      width: auto;
      height: 25px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 15px 0px;
      font-size: 15px;
      span {
        display: flex;
        width: 16%;
      }
    }
    .main {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      .shop{
        display: flex;        
        justify-content: space-around;
        align-items: center;
        padding: 15px 0px;
        font-size: 14px;
        margin: 10px 0px;
        span{
            width: 16%;
            cursor: pointer;
        }
        img{
            width: 35px;    
            height: 35px;
            vertical-align: middle;
            border-radius: 50%;
            overflow: hidden;
            padding-right: 10px;
        }
        .shop_span{
            display: flex;
            align-items: center;
        }
        .buy{
            button{
                width: 60px;
                height: 25px;
                background: #1A73E8;
                border: 0;
                font-size: 14px;
                color: #fff;
                cursor: pointer;
            }
        }
      }
      .parcent{
        color: #00adb5;
        font-weight: 600;
      }
      .credit{
        color: #00adb5;
      }
    }
  }
}
</style>