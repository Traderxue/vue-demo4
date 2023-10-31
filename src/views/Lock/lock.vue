<script setup>
import { ref } from "vue";

const subData = ref([
    {
        logo:"https://etherscan.io/token/images/bnb_28_2.png",
        type:"USDT",
        parcent:"15.00%",
        current:"活期"
    },
    {
        logo:"https://etherscan.io/token/images/centre-usdc_28.png",
        type:"USDT",
        parcent:"15.00%",
        current:"活期"
    },
    {
        logo:"https://etherscan.io/token/images/trontrx_32.png",
        type:"USDT",
        parcent:"15.00%",
        current:"定期"
    },
    {
        logo:"https://etherscan.io/token/images/chainlinktoken_32.png",
        type:"USDT",
        parcent:"15.00%",
        current:"活期"
    },
    {
        logo:"https://etherscan.io/token/images/theta_28.png",
        type:"USDT",
        parcent:"15.00%",
        current:"活期"
    },
    {
        logo:"https://etherscan.io/token/images/shibatoken_32.png",
        type:"USDT",
        parcent:"15.00%",
        current:"定期"
    },
    {
        logo:"https://etherscan.io/token/images/theta_28.png",
        type:"USDT",
        parcent:"15.00%",
        current:"活期"
    },
    {
        logo:"https://etherscan.io/token/images/shibatoken_32.png",
        type:"USDT",
        parcent:"15.00%",
        current:"定期"
    },
])
</script>

<template>
  <div class="lock">
    <div class="top">
      <h3>简单赚币：高效、省时、省力</h3>
      <p>高安全性交易平台，让您的数字资产安全无虞，收益更加可观</p>
      <button>什么是锁仓挖矿</button>
      <img src="@/assets/bg_2.png" alt="">
    </div>
    <div class="box">
        <div class="top_box">
            <span>币种</span><span>参考年化</span><span>期限</span><span>操作</span>
        </div>
        <div class="main_box">
            <div class="per" v-for="(item,index) in subData" :key="index">
                <div>
                    <img :src="item.logo" alt="" class="acvotor">
                    <span>{{item.type}}</span>
                </div>
                <span style="color: #00adb5;">{{item.parcent}}</span>
                <span>{{item.current}}</span>
                <span>
                    <button>申购</button>
                </span>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lock{
    width: auto;
    height: auto;
    margin-top: 20px;
    background: #364f6b;
    .top{
        width: auto;
        height: 450px;
        width: 80%;
        margin: 0 auto;
        display: flex;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        position: relative;
        img{
            position: absolute;
            right: 10%;
            top: 50%;
            transform: translateY(-50%);
            height: 300px;
        }
        h3{
            font-size: 34px;
            color: #FFF;
        }
        p{
            font-weight: 600;
            font-size: 24px;
            color: #CCC;
        }
        button{
            width: 30%;
            height: 45px;
            border-radius: 45px;
            font-weight: 600;
            font-size: 18px;
            border: 0;
            cursor: pointer;
            color: #333;
        }

    }
    .box{
        width:80%;
        height: auto;
        margin: 0 auto;
        .top_box{
            display: flex;
            justify-content: space-between;
            color: #FFF;
            margin: 20px 0px;
            span{
                width: 25%;
                text-align: center;
            }
        }
        .main_box{
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            .per{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 10px 0px;
                color: #FFF;
                cursor: pointer;
                font-weight: 600;
                padding: 10px 0px;
                div{
                    width: 25%;
                    text-align: center;
                    .acvotor{
                        width: 25px;
                        height: 25px;
                        vertical-align: middle;
                        padding-right: 5px;
                    }
                }
                span{
                    width: 25%;
                    text-align: center;
                    button{
                        width: 75px;
                        height: 40px;
                        border: 0;
                        background: #3490de;
                        color: #FFF;
                        border-radius: 3px;
                        cursor: pointer;
                    }
                }
               
            }
            .per:hover{
                background:#708090;
            }
        }
    }
}
</style>