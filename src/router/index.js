import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import SignUp from '../views/SignUp.vue'
import UserProfile from "../views/UserProfile.vue"
import BookDetail from "../views/BookDetail.vue"
import Search from "../views/Search.vue"
import Cart from 'src/views/Cart.vue'
import About from 'src/views/About.vue'
import Books from 'src/views/Books.vue'
const routes = [
  {path:"/",component:Login},
  {path:"/home", component: Home},
  {path:"/login", component: Login},
  {path:"/signup", component: SignUp},
  {path:"/home/user/profile", component: UserProfile},
  {path:"/home/detail/:id", component: BookDetail},
  {path:"/home/search",component: Search},
  {path:"/home/cart", component:Cart},
  {path: "/about", component: About},
  {path:"/books", component:Books}
 //... more routes here...
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router