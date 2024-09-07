import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import SignUp from '../views/SignUp.vue'
import UserProfile from "../views/UserProfile.vue"
import BookDetail from "../views/BookDetail.vue"
import Search from "../views/Search.vue"
const routes = [
  {path:"/",component:Login},
  {path:"/home", component: Home},
  {path:"/login", component: Login},
  {path:"/signup", component: SignUp},
  {path:"/home/user/profile", component: UserProfile},
  {path:"/home/detail/:id", component: BookDetail},
  {path:"/home/search",component: Search}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router