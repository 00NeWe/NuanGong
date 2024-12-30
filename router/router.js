import { createRouter, createWebHistory } from 'vue-router'
import Connection from './Connection/Connection.vue'
import FunctionPage1 from './pages/FunctionPage/FunctionPage1.vue'
import FunctionPage2 from './pages/FunctionPage/FunctionPage2.vue'
import FunctionPage3 from './pages/FunctionPage/FunctionPage3.vue'
import Profile from './pages/Profile/Profile.vue'
import Content from '../components/Content.vue'

const routes = [
  { path: '/', component: Connection },
  { path: '/function1', component: FunctionPage1 },
  { path: '/function2', component: FunctionPage2 },
  { path: '/function3', component: FunctionPage3 },
  { path: '/profile', component: Profile },
  {path: '/content',name: 'Content',component: Content},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router