<!--
=============================================================
  DAY 3 ASSIGNMENT — HomeView.vue
  Shows the task list with router-link navigation to each task
=============================================================
-->
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
//import { useTaskStore } from '@/stores/taskStore' 
import {tasks} from '../data/tasks'

//const taskStore = useTaskStore()
const route     = useRoute()

// TODO 1: Read route.query.error — if it equals 'notfound', show a warning banner
const showErrorBanner = computed(() => route.query.error === 'notfound')
</script>

<template>
  <div class="home-view">
    <h1>📝 My Tasks</h1>

    <!-- TODO 2: Show a warning banner if showErrorBanner is true -->
    <div class="error-banner" v-if="showErrorBanner">
      ⚠️ Task not found. Redirected back to home.
    </div>

    <nav class="page-nav">
      <!-- TODO 3: Add a RouterLink to /about -->
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/stats">Stats</RouterLink>
      
    </nav>

    <!-- TODO 4: Render each task as a RouterLink to /task/:id -->
    <!-- Use <RouterLink :to="`/task/${task.id}`"> as the wrapper -->


    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id">
        <!-- TODO 5: Wrap this in a RouterLink -->
        <RouterLink :to="`/task/${task.id}`">
          <span :class="{ done: task.done }">{{ task.name }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.home-view {
  max-width: 680px;
  margin: 40px auto;
  padding: 28px;
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
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.4px;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.error-banner {
  background: rgba(254, 243, 199, 0.9);
  border: 1px solid #f59e0b;
  border-radius: 12px;
  padding: 12px 14px;
  margin-bottom: 16px;
  color: #92400e;
  font-size: 14px;
}
.page-nav {
  margin-bottom: 20px;
  display: flex;
  gap: 16px;
}
.page-nav a {
  color: #7c3aed;
  text-decoration: none;
  font-weight: 600;
  padding-bottom: 2px;
  transition: all 0.2s;
}
.page-nav a:hover {
  color: #5b21b6;
}
.page-nav a.router-link-active {
  color: #1B2A4A;
  border-bottom: 2px solid #a78bfa;
}
.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.task-list li {
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.82);
  border-radius: 14px;
  margin-bottom: 10px;
  border: 1px solid rgba(224, 215, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s;
}
.task-list li:hover {
  background: rgba(255, 255, 255, 0.96);
  border-color: #a78bfa;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.08);
  transform: translateY(-1px);
}
.task-list a {
  text-decoration: none;
  color: inherit;
  display: block;
}
.done {
  text-decoration: line-through;
  color: #9ca3af;
}


</style>