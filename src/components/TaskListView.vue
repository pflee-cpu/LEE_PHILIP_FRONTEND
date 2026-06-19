<!--
=============================================================
  DAY 4 ASSIGNMENT — TaskListView.vue (refactored for Pinia)
  Remove all local state. Use the store for everything.
=============================================================
-->
<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

// TODO 1: Import your store
import { useTaskStore } from '../stores/taskStore'
import { useUserStore } from '../stores/userStore'

// TODO 2: Get the store instance
const taskStore = useTaskStore()

const userStore = useUserStore()
const { currentUser, isLoggedIn } = storeToRefs(userStore)
const { login, logout } = userStore
const userName = ref('')

// TODO 3: Destructure REACTIVE STATE using storeToRefs()
const { tasks, doneCount, pendingCount, totalCount } = storeToRefs(taskStore)

// TODO 4: Destructure ACTIONS directly (no storeToRefs needed for functions)
const { addTask, toggleTask, removeTask } = taskStore

// This local ref is fine — it's UI state, not task state
const newTaskName = ref('')

function handleAdd() {
  // TODO 5: Call addTask() from the store, then clear the input
  addTask(newTaskName.value)
  newTaskName.value =''
  
}

function handleLogin() {
  login(userName.value)
  userName.value = ''
}


</script>

<template>
  <div class="task-view">
    <h1>Tasks</h1>
    <div class="user-header">
      <div class="user-status">
        <p v-if="isLoggedIn">Welcome, {{ currentUser }} 👋</p>
        <p v-else>Not logged in</p>
        <button v-if="isLoggedIn" class="logout-btn" @click="logout">
          Logout
        </button>
      </div>
    <div class="login-row">
      <input
        v-model="userName"
        placeholder="Enter your name"
        @keyup.enter="handleLogin"
      />
    <button @click="handleLogin">Login</button>
  </div>
</div>
    <!-- TODO 6: Display totalCount, doneCount, pendingCount from the store -->
    <div class="stats">
      <span>Total: {{ totalCount }}</span>
      <span>Done: {{ doneCount }}</span>
      <span>Pending: {{ pendingCount }}</span>
    </div>
    <div class="input-row">
      <input v-model="newTaskName" placeholder="New task..." @keyup.enter="handleAdd" />
      <button @click="handleAdd">Add</button>
    </div>
    <p v-if="tasks.length === 0" class="empty">
      No tasks yet!
    </p>

    <!-- TODO 7: Render the task list using tasks from the store -->
    <ul class="task-list">
      <!-- v-for task in tasks -->
      <!--   checkbox v-model="task.done" @change="toggleTask(task.id)" -->
      <!--   span :class done -->
      <!--   remove button @click="removeTask(task.id)" -->
      <li v-for="task in tasks" :key="task.id">
        <input
          type="checkbox"
          :checked="task.done"
          @change="toggleTask(task.id)"
        />
        <span :class="{done: task.done }">
          {{ task.name }}
        </span>
        <button class="remove" @click="removeTask(task.id)">
          Remove
        </button>
      </li>    
    </ul>
  </div>
</template>

<style scoped>
.task-view {
  max-width: 680px;
  margin: 40px auto;
  padding: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', Arial, sans-serif;
  background: rgba(255, 255, 255, 0.74);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.12),
              0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.7);
}
h1 {
  margin-bottom: 16px;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.5px;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.user-header {
  margin-bottom: 20px;
}
.user-header p {
  margin-bottom: 12px;
  color: #4A5568;
  font-size: 14px;
  font-weight: 600;
}
.login-row {
  display: flex;
  gap: 8px;
  margin-bottom: 6px;
}
.login-row input {
  flex: 1;
  padding: 10px 14px;
  border: 1.5px solid #e0d7ff;
  border-radius: 12px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.85);
  color: #4c1d95;
  outline: none;
  transition: all 0.2s;
}
.login-row input:focus {
  border-color: #a78bfa;
  box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.18);
}
.login-row button {
  padding: 10px 16px;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}
.login-row button:hover {
  opacity: 0.92;
  transform: scale(1.02);
}
.stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin-bottom: 18px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(224, 215, 255, 0.7);
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.06);
  font-size: 13px;
  font-weight: 600;
  color: #6d28d9;
}

.stats span {
  flex: 1;
  text-align: center;
  padding: 8px 10px;
  background: rgba(245, 243, 255, 0.9);
  border-radius: 10px;
}

.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.input-row input {
  flex: 1;
  padding: 10px 14px;
  border: 1.5px solid #e0d7ff;
  border-radius: 12px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.85);
  color: #4c1d95;
  outline: none;
  transition: all 0.2s;
}
.input-row input:focus {
  border-color: #a78bfa;
  box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.18);
}
.input-row button {
  padding: 10px 16px;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}
.input-row button:hover {
  opacity: 0.92;
  transform: scale(1.02);
}
.empty {
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  margin: 24px 0;
}
.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.task-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.82);
  border-radius: 14px;
  margin-bottom: 10px;
  border: 1px solid rgba(224, 215, 255, 0.7);
  transition: all 0.2s;
}
.task-list li:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: #a78bfa;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.08);
  transform: translateY(-1px);
}
.task-list li span {
  flex: 1;
  font-size: 14px;
  color: #1B2A4A;
}
.done {
  text-decoration: line-through;
  color: #9ca3af;
}
.task-list li input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #7c3aed;
  cursor: pointer;
}
.task-list li .remove {
  padding: 6px 12px;
  background: rgba(254, 226, 226, 0.9);
  color: #dc2626;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
}
.task-list li .remove:hover {
  background: #fecaca;
}

.user-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.logout-btn {
  padding: 7px 14px;
  background: rgba(254, 226, 226, 0.9);
  color: #dc2626;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
}
.logout-btn:hover {
  background: #fecaca;
}
</style>
