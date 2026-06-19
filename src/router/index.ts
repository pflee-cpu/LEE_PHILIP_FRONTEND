import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TaskDetailView from '../views/TaskDetailView.vue'
//import TaskListView from '../views/TaskListView.vue'
import AboutView from '../views/AboutView.vue'
import { tasks } from '../data/tasks'
import StatsView from '../views/StatsView.vue'
const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: HomeView},
  {path: '/task/:id', component: TaskDetailView, meta: {requiresTask: true}},
  {path: '/about', component: AboutView},
  {path: '/stats', component: StatsView}, 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  if (to.meta.requiresTask) {
    const taskExits = tasks.find(t => t.id === Number(to.params.id))
    if (!taskExits) {
      next ({path: '/home', query: {error: 'not found'}})

    } else {
      next ()
    }
  } else {
    next ()
  }
})
export default router