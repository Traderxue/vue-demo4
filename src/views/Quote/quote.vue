<script setup>
import { ref } from "vue";
import chart from "@/views/Quote/chart.vue";

const listData = ref([
  {
    type: "BTC",
    price: "24614.13",
    parcent: "+0.16%",
    up: 1,
  },
  {
    type: "ETH",
    price: "24614.13",
    parcent: "+2.16%",
    up: 1,
  },
  {
    type: "APE",
    price: "24614.13",
    parcent: "+3.16%",
    up: 1,
  },
  {
    type: "SOL",
    price: "24614.13",
    parcent: "-1.3%",
    up: 0,
  },
  {
    type: "DOGE",
    price: "0.01213",
    parcent: "+3.16%",
    up: 1,
  },
  {
    type: "LTC",
    price: "3462.13",
    parcent: "-1.3%",
    up: 0,
  },
]);

const rightData = ref([
  { price: "26415.6", num: "0.35" },
  { price: "18273.9", num: "0.21" },
  { price: "30987.4", num: "0.48" },
  { price: "15642.3", num: "0.17" },
  { price: "16983.4", num: "0.19" },
  { price: "28254.6", num: "0.40" },
  { price: "19543.2", num: "0.24" },
  { price: "26189.7", num: "0.34" },
  { price: "17654.9", num: "0.22" },
  { price: "29976.3", num: "0.44" },
  { price: "24678.1", num: "0.32" },
  { price: "29976.3", num: "0.44" },
  { price: "24678.1", num: "0.32" },
]);

const active = ref("1M")

const timeData = ref([
  {
    time:"1M"
  },
  {
    time:"5M"
  },
  {
    time:"15M"
  },
  {
    time:"30M"
  },
  {
    time:"1H"
  },
  {
    time:"4H"
  }
])
</script>

<template>
  <div class="quote">
    <div class="main_left">
      <input type="text" placeholder="请输入内容" />
      <div class="top">
        <span>全部</span>
        <span>主流区</span>
        <span>创新区</span>
      </div>
      <div class="list">
        <div v-for="(item, index) in listData" :key="index">
          <span>{{ item.type }}/USDT</span
          ><span :class="item.up == 1 ? 'up' : 'down'" class="list_mid">{{
            item.price
          }}</span
          ><span :class="item.up == 1 ? 'up' : 'down'" class="list_right">{{
            item.parcent
          }}</span>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="time">
        <span v-for="(item,index) in timeData" :key="index">{{item.time}}</span>
      </div>
      <chart />
      <div class="form">
          <input type="text" placeholder="请输入杠杆(1x-200x)">
          <input type="text" placeholder="请输入开单数量(USDT)">
          <div>
            <button class="buyBtn">买入做多</button>
            <button class="sellBtn">卖出做空</button>
          </div>
      </div>
    </div>
    <div class="main_right">
      <div class="buy">
        <div v-for="(item, index) in rightData" :key="index">
          <span>{{ item.price }}</span
          ><span>{{item.num}}</span>
        </div>
      </div>
      <div class="sell">
        <div v-for="(item, index) in rightData" :key="index">
          <span>{{ item.price }}</span
          ><span>{{item.num}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.quote {
  width: auto;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #dbe2ef;
  .main_left {
    width: 20%;
    height: 100%;
    background: #364f6b;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    input {
      width: 90%;
      height: 35px;
      padding-left: 15px;
      outline: none;
      background: #364f6b;
      border: 1px solid;
      color: #dbe2ef;
      box-sizing: border-box;
      margin: 0 auto;
    }
    .top {
      display: flex;
      justify-content: space-around;
      font-size: 15px;
      margin: 15px 0px;
      span {
        cursor: pointer;
      }
    }
    .list {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      div {
        display: flex;
        justify-content: space-between;
        margin: 15px 0px;
        font-size: 15px;
        font-weight: 600;
        color: #f5f5f5;
        cursor: pointer;
        span {
          display: inline-block;
          width: 33%;
          text-align: left;
        }
        .list_mid {
          text-align: center;
        }
        .list_right {
          text-align: right;
        }
        .up {
          color: #12b886;
        }
        .down {
          color: #e23e57;
        }
      }
    }
  }
  .mid {
    width: 55%;
    height: 100%;
    background: #364f6b;
    box-sizing: border-box;
    padding: 20px;
    .form{
      padding: 15px 30px;
      width: 100%;
      height: 160px; 
      text-align: center;
      input{
        width: 50%;
        height: 35px;
        margin: 10px;
        box-sizing: border-box;
        padding-left: 15px;
        outline: none;
        color: #555;
      }
      div{
        margin: 15px auto;
        width: 50%;
        display: flex;
        justify-content: space-between;
        button{
          width: 40%;
          height: 35px;
          border: 0;
          color: #FFF;
          cursor: pointer;
        }
        .buyBtn{
          background: #12b886;
        }
        .sellBtn{
          background: #e23e57;
        }
      }
    }
    .time{
      width: 80%;
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      margin: 10px 0px;
      font-size: 14px;
    }
  }
  .main_right {
    width: 20%;
    height: 90%;
    background: #364f6b;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    font-size: 15px;
    font-weight: 600;
    .buy {
      div {
        display: flex;
        justify-content: space-around;
        margin: 10px 0px;
        color: #12b886;
      }
    }
    .sell {
      div {
        display: flex;
        justify-content: space-around;
        margin: 10px 0px;
        color: #e23e57;
      }
    }
  }
}
</style>