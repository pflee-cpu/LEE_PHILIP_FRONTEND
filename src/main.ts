import { createApp } from 'vue'
import {createPinia} from 'pinia'

//import TaskCounter from './components/TaskCounter.vue'
//createApp(TaskCounter).mount('#app')

// import TaskListView from './components/TaskListView.vue'
// createApp(TaskListView).mount('#app')

// import App from './App.vue'
// import router from './router'
// createApp(App).use(createPinia()).use(router).mount('#app')

import TaskListView from './components/TaskListView.vue'
createApp(TaskListView).use(createPinia()).mount('#app')