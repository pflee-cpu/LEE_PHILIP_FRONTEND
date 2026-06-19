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

<style scoped>
.stats-view {
    max-width: 520px;
    margin: 40px auto;
    padding: 24px;
    font-family: Arial, sans-serif;
}

h1 {
    color: #1B2A4A;
    margin-bottom: 16px;
}

.stats-card {
    background: white;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
}

p {
    color: #4A5568;
    font-size: 15px;
    margin: 8px 0;
}

a {
    color: #42B883;
    text-decoration: none;
    font-weight: 600;
}

</style>