import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"",
      component:()=>import("@/views/index.vue"),
      children:[
        {
          path:"",
          component:()=>import("@/views/Quote/quote.vue")
        },
        {
          path:"/quote",
          component:()=>import("@/views/Quote/quote.vue")
        },
        {
          path:"/mine",
          component:()=>import("@/views/Mine/mine.vue")
        },
        {
          path:"/lock",
          component:()=>import("@/views/Lock/lock.vue")
        },
        {
          path:"/fait",
          component:()=>import("@/views/Fait/fait.vue")
        },
        {
          path:"/contract",
          component:()=>import("@/views/Contract/contract.vue")
        },
        {
          path:"/coins",
          component:()=>import("@/views/Coins/coin.vue")          
        },
        {
          path:"/assets",
          component:()=>import("@/views/Assets/assets.vue")
        },
        {
          path:"/lang",
          component:()=>import("@/views/Lang/lang.vue")
        }
      ]
    }
  ]
})

export default router
