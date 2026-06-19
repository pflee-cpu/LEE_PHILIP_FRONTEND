<script setup>
import { computed } from 'vue'
import { tasks } from '../data/tasks'
const totalCount = computed(() => tasks.length)
const doneCount = computed(() => tasks.filter(task => task.done).length)
const pendingCount = computed(() => tasks.filter(task => !task.done).length)

</script>

<template>
    <div class="stats-view">
        <h1> Task Stats</h1>
        <div class="stats-card">
            <p>Total: {{  totalCount }}</p>
            <p>Done: {{  doneCount }}</p>
            <p>Pending: {{  pendingCount }}</p>
        </div>
        <RouterLink to="/home"> Back to Home</RouterLink>
    </div>
</template>

<style scoped>.stats-view {
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
  margin-bottom: 18px;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.4px;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stats-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(224, 215, 255, 0.7);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
}
.stats-card p {
  color: #4A5568;
  font-size: 15px;
  margin: 0;
  padding: 12px 14px;
  background: rgba(245, 243, 255, 0.9);
  border-radius: 12px;
  font-weight: 600;
}
a {
  color: #7c3aed;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}
a:hover {
  color: #5b21b6;
}

</style>