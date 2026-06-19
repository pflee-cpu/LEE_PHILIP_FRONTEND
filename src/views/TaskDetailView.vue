<!--
=============================================================
  DAY 3 ASSIGNMENT — TaskDetailView.vue
  Displays full details for a single task
=============================================================
-->
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
//import { useTaskStore } from '@/stores/taskStore'
import { tasks } from '../data/tasks'
// TODO 1: Get the current route and router instances
const route  = useRoute()
const router = useRouter()

//const taskStore = useTaskStore()

// TODO 2: Find the task matching the route param
// Remember: route.params.id is a STRING — cast to Number before comparing
const task = computed(() => tasks.find(t => t.id === Number(route.params.id)))

// TODO 3: Write goBack() using router.push() to navigate to '/home'
function goBack() {
  // your code here
  router.push('/home')
}
</script>

<template>
  <div class="detail-view">

    <!-- TODO 4: Show this only if task is found (v-if="task") -->
    <div v-if="task">
      <button class="back-btn" @click="goBack">← Back</button>

      <!-- TODO 5: Display task.name, task.dueDate, and task.done status -->
      <h1> {{ task.name }}</h1>
      <p>Status: {{ task.done ? 'Done' : 'Pending'}}</p>
      <p>Due: {{task.dueDate }}</p>
    </div>

    <!-- This case is handled by the router guard, but good to have a fallback -->
    <div v-if="false">
      <p>Task not found.</p>
      <button @click="goBack">Go Back</button>
    </div>
  </div>
</template>

<style scoped>.detail-view {
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
.back-btn {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(224, 215, 255, 0.7);
  border-radius: 10px;
  padding: 8px 14px;
  cursor: pointer;
  margin-bottom: 20px;
  color: #7c3aed;
  font-weight: 600;
  transition: all 0.2s;
}
.back-btn:hover {
  background: #ede9fe;
  border-color: #a78bfa;
}
h1 {
  margin-bottom: 14px;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.4px;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
p {
  color: #4A5568;
  font-size: 15px;
  margin: 10px 0;
  line-height: 1.6;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.82);
  border-radius: 12px;
  border: 1px solid rgba(224, 215, 255, 0.7);
}</style>
