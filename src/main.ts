import { createApp } from 'vue'
import { createPinia } from 'pinia'
// DAY 1
// import TaskCounter from './components/TaskCounter.vue'
// createApp(TaskCounter).mount('#app')
// DAY 2
// import D2TaskListView from './components/D2TaskListView.vue'
// createApp(D2TaskListView).mount('#app')
// DAY 3
import App from './App.vue'
import router from './router'
createApp(App).use(createPinia()).use(router).mount('#app')
// DAY 4
// import TaskListView from './components/TaskListView.vue'
// createApp(TaskListView).use(createPinia()).mount('#app')