import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import SignUp from '../views/SignUp.vue'
import UserProfile from "../views/UserProfile.vue"
const routes = [
  {path:"/", component: Home},
  {path:"/login", component: Login},
  {path:"/signup", component: SignUp},
  {path:"/user/profile", component: UserProfile}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router