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
    <Transition name="fade" mode="out-in">
        <TodoListView v-if="activeView === 'todos'" />
        <UsersView v-else />
    </Transition>
  </div>
</template>
<style scoped>
.dashboard {
  min-height: 100vh;
  background: linear-gradient(135deg, #e0d7ff 0%, #f5f3ff 50%, #ddd6fe 100%);
  padding-bottom: 20px 20px 50px;
}
.top-nav {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 28px;
  margin-bottom: 12px;
}
.top-nav button {
  padding: 9px 20px;
  border: 1.5px solid #e0d7ff;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.7);
  color: #7c3aed;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s;
  backdrop-filter: blur(10px);
}
.top-nav button:hover {
  background: #ede9fe;
  border-color: #a78bfa;
}
.top-nav button.active {
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>