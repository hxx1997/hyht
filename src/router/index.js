import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Order from '@/components/Order'
import Meal from '@/components/Meal'
import Customer from '@/components/Customer'
import Comment from '@/components/Comment'
import Statistical from '@/components/Statistical'
import Partner from '@/components/Partner'
import Staff from '@/components/Staff'
import Advisory from '@/components/Advisory'
import WeddingMeal from '@/components/WeddingMeal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path: '/home',
      name: 'Home',
      component: Home
    },
    {path: '/order',
      name: 'Order',
      component: Order
    },
    {path: '/meal',
      component: Meal,
      name: 'Meal',
      children:[
        {
          path:'/weddingMeal',
          component:WeddingMeal
        }
      ]
    },
    {path: '/customer',
      name: 'Customer',
      component: Customer
    },
    {path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {path: '/advisory',
      name: 'Advisory',
      component: Advisory
    },
    {path: '/statistical',
      name: 'Statistical',
      component: Statistical
    },
    {path: '/partner',
      name: 'Partner',
      component: Partner
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff
    }
  ]
})
