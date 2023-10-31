<script setup>
import { ref } from "vue";

const listData = ref([
    {
        logo:"https://static.coinall.ltd/cdn/assets/imgs/234/1D5DDB035B8182DB.png",
        type:"BTC",
        hash:"SH256",
        mining:"4",
        power1:"145.74 HS/s",
        power2:"455.48 HT/s",
        amount:0
    },
    {
        logo:"https://static.coinall.ltd/cdn/assets/imgs/234/1D5DDB035B8182DB.png",
        type:"LTC",
        hash:"SH256",
        mining:"4",
        power1:"1.23 GH/s",
        power2:"840.23 TH/s",
        amount:0
    },
    {
        logo:"https://static.coinall.ltd/cdn/assets/imgs/234/8A135610E74EACD8.png",
        type:"BCH",
        hash:"SH256",
        mining:"4",
        power1:"366.26 MH/s",
        power2:"172.95 TH/s",
        amount:0
    },
    {
        logo:"https://static.coinall.ltd/cdn/assets/imgs/234/1D5DDB035B8182DB.png",
        type:"APE",
        hash:"SH256",
        mining:"4",
        power1:"1.23 GH/s",
        power2:"840.23 TH/s",
        amount:0
    },
    {
        logo:"https://static.coinall.ltd/cdn/assets/imgs/234/8A135610E74EACD8.png",
        type:"DOGE",
        hash:"SH256",
        mining:"4",
        power1:"366.26 MH/s",
        power2:"172.95 TH/s",
        amount:0
    },
    {
        logo:"https://static.coinall.ltd/cdn/assets/imgs/234/1D5DDB035B8182DB.png",
        type:"SOL",
        hash:"SH256",
        mining:"4",
        power1:"1.23 GH/s",
        power2:"840.23 TH/s",
        amount:0
    },
    {
        logo:"https://static.coinall.ltd/cdn/assets/imgs/234/8A135610E74EACD8.png",
        type:"OKX",
        hash:"SH256",
        mining:"4",
        power1:"366.26 MH/s",
        power2:"172.95 TH/s",
        amount:0
    },
])
</script>

<template>
    <div class="mining">
        <div class="top">
            <h3>世界领先的区块链数字资产挖矿平台</h3>
            <p>公开透明.安全稳定</p>
            <button>进入矿池</button>
            <img src="@/assets/bg_4.png" alt="">
        </div>
        <div class="box">
            <h3>POW挖矿</h3>
            <div class="title">
                <span>币种</span>
                <span>挖矿算法</span>
                <span>有效矿工</span>
                <span>矿池算力</span>
                <span>全网算力</span>
                <span>起付金额</span>
                <span>操作</span>
            </div>
            <div class="list">
                <div class="per" v-for="(item,index) in listData" :key="index">
                    <span>
                        <img :src="item.logo" alt="">
                        <p>{{item.type}}</p>
                    </span>
                    <span>{{item.hash}}</span>
                    <span>{{item.hash}}</span>
                    <span style="color: #00adb5;">{{item.power1}}</span>
                    <span style="color: #00adb5;">{{item.power2}}</span>
                    <span>{{item.amount}}</span>
                    <span>
                        <button>申购</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mining{
    width: auto;    
    height: 100%;
    background: #364F6B;
    margin: 20px auto;
    box-sizing: border-box;
    padding: 40px 10%;
    .top{
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        position: relative;
        h3{
            font-size: 28px;
            color: #FFF;
        }
        p{
            font-size: 24px;
            font-weight: 600;
            color: #ccc;
            margin: 50px 0px;
        }
        button{
            width: 30%;
            height: 45px;
            border-radius: 35px;
            border: 0;
            font-size: 20px;
            font-weight: 600;
            color: #333;
            cursor: pointer;
        }
        img{
            position: absolute;
            width: 300px;            
            height: 300px;
            right: 100px;
        }
    }
    .box{
        width: auto;
        height: auto;
        margin-top: 60px;
        color: #FFF;
        h3{
            font-size: 28px;
            margin: 20px 0px;
        }
        .title{
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            span{
                width: 14%;
            }
        }
        .list{
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            .per{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 0px;
                margin: 15px 0px;
                span{
                    display: flex;
                    align-items: center;
                    width: 14%;
                    cursor: pointer;
                    img{
                        width: 20px;                        
                        height: 20px;
                        padding-right: 10px;
                    }
                    button{
                        width: 70px;
                        height: 35px;
                        background: #00adb5;
                        border: 0;
                        color: #FFF;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>