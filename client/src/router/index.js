import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import UserIndex from'@/components/Users/Index'
import UserCreate from'@/components/Users/CreateUser'
import UserEdit from'@/components/Users/EditUser'
import UserShow from'@/components/Users/ShowUser'
import Login from'@/components/Login'

import BlogIndex from'@/components/Blogs/Index'
import BlogCreate from'@/components/Blogs/CreateBlog'
import BlogEdit from'@/components/Blogs/EditBlog'
import BlogShow from'@/components/Blogs/ShowBlog'

import CommentsIndex from '@/components/comments/Index'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
   {
    path: '/user/create',
    name: 'user-create',
    component: UserCreate
   },
   {
    path: '/user/edit/:userId',
    name: 'user-edit',
    component: UserEdit
   },
   {
    path: '/user/:userId',
    name: 'user',
    component: UserShow
   },
   {
    path: '/login',
    name: 'user',
    component: Login
   },
   {
    path: '/blogs',
    name: 'blogs',
    component: BlogIndex
   },
   {
    path: '/blog/create',
    name: 'blogs-create',
    component: BlogCreate
   },
   {
    path: '/blog/edit',
    name: 'blogs-edit',
    component: BlogEdit
   },
   {
    path: '/blog/:blogId',
    name: 'blog',
    component: BlogShow
   },
   {
    path: '/comments',
    name: 'comments',
    component: CommentsIndex
   },
  ]
})
