import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home/home'
import RestaurantDetail from '../components/RestaurantDetail/restaurantdetail'
import LoadingPage from '../components/LoadingPage/loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      component: Home
    },
    {
      name: 'RestaurantDetails',
      path: '/restaurantdetails/:name',
      component: RestaurantDetail
    },
    {
      name: 'LoadingPage',
      path: '/LoadingPage',
      component: LoadingPage
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
