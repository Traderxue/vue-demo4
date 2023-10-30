<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const active = ref("行情");

const leftData = ref([
  {
    title: "行情",
    path:"/quote"
  },
  {
    title: "法币交易",
    path:"/fait"
  },
  {
    title: "币币交易",
    path:"/coins"
  },
  {
    title: "合约交易",
    path:"/contract"
  },
  {
    title: "锁仓交易",
    path:"/lock"
  },
  {
    title: "我的资产",
    path:"/assets"
  },
]);

const rightData = ref([
  {
    icon: "person",
    title: "个人中心",
    path:"/mine"
  },
  {
    icon: "language",
    title: "简体中文",
  },
]);

const changeTab = (item) => {
  active.value = item.title;
  router.push(item.path)
};

const changeTabRight = (item) => {
  active.value = item.title;
  router.push(item.path)
};
</script>

<template>
  <div class="index">
    <div class="header">
      <div class="left">
        <span
          v-for="(item, index) in leftData"
          :key="index"
          @click="changeTab(item)"
          :class="active == item.title ? 'active' : ''"
          >{{ item.title }}</span
        >
      </div>
      <div class="right">
        <div
          @click="changeTabRight(item)"
          v-for="(item, index) in rightData"
          :key="index"
          :class="active==item.title?'active':''"
        >
          <span class="material-symbols-outlined"> {{ item.icon }} </span>
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
        <RouterView/>
  </div>
</template>

<style lang="scss" scoped>
.index {
  width: auto;
  height: auto;
  box-sizing: border-box;
  background: #171c2b;
  overflow: hidden;
  .header {
    padding: 0px 10%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 15px;
    background: #364f6b;
    .left {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 70%;
      span {
        cursor: pointer;
      }
    }
    .right {
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      width: 30%;
      div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        span {
          padding-left: 5px;
          cursor: pointer;
        }
      }
    }
    .active {
      color: #00adb5;
    }
  }
}
</style>