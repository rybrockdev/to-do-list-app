import Vue from 'vue'
import Router from 'vue-router'
import AddTodo from '@/components/AddTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddTodo',
      component: AddTodo
    }
  ]
})
