<script setup>
import { ref } from 'vue'
import TodoListView from './TodoListView.vue'
import UsersView from './UsersView.vue'
const activeView = ref('todos')
</script>
<template>
  <div class="dashboard">
    <div class="top-nav">
      <button
        @click="activeView = 'todos'"
        :class="{ active: activeView === 'todos' }"
      >
        Todos
      </button>
      <button
        @click="activeView = 'users'"
        :class="{ active: activeView === 'users' }"
      >
        Users
      </button>
    </div>
    <TodoListView v-if="activeView === 'todos'" />
    <UsersView v-else />
  </div>
</template>
<style scoped>
.dashboard {
  min-height: 100vh;
}
.top-nav {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
}
.top-nav button {
  padding: 8px 18px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  font-size: 14px;
}
.top-nav button.active {
  background: #42B883;
  color: white;
  border-color: #42B883;
}
</style>