import { createApp } from 'vue'
import { createPinia } from 'pinia'
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
// import App from './App.vue'
// import router from './router'
// createApp(App).use(createPinia()).use(router).mount('#app')
// =====================================================
// DAY 4 — Pinia State Management
// =====================================================
// import TaskListView from './components/TaskListView.vue'
// createApp(TaskListView).use(createPinia()).mount('#app')
// =====================================================
// DAY 5 — API Integration: Todos
// =====================================================
import TodoListView from './components/TodoListView.vue'
createApp(TodoListView).mount('#app')
// =====================================================
// DAY 5 — API Integration: Users
// =====================================================
// import UsersView from './components/UsersView.vue'
// createApp(UsersView).mount('#app')