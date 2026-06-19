import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// =====================================================
// DAY 1 — Reactive Task Counter
// =====================================================
// import TaskCounter from './components/TaskCounter.vue'
// createApp(TaskCounter).mount('#app')
// =====================================================
// DAY 2 — Props, Emits, Slots
// =====================================================
// import D2TaskListView from './components/D2TaskListView.vue'
// createApp(D2TaskListView).mount('#app')
// =====================================================
// DAY 3 — Vue Router
// =====================================================
import App from './App.vue'
import router from './router'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App).use(pinia).use(router).mount('#app')
// =====================================================
// DAY 4 — Pinia State Management
// // =====================================================
// import TaskListView from './components/TaskListView.vue'
// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)
// createApp(TaskListView).use(pinia).mount('#app')
// =====================================================
// DAY 5 — API Integration: Todos
// =====================================================
// import TodoListView from './components/TodoListView.vue'
// createApp(TodoListView).mount('#app')
// =====================================================
// DAY 5 — API Integration: Users
// =====================================================
// import UsersView from './components/UsersView.vue'
// createApp(UsersView).mount('#app')
// import ApiDashboardView from './components/ApiDashboardView.vue'
// createApp(ApiDashboardView).mount('#app')