<script setup>
import { useFetch } from '../composables/useFetch'
const { data: users, loading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/users')</script>

<template>
    <div class="users-view">
        <h1> 👤 Users </h1>
        <p class="subtitle"> Loaded from JSONPlaceholder API</p>
        <div v-if="loading" class="loading">
            Loading users...
        </div>
        <div v-else-if="error" class="error-box">
            <p> Error: {{ error }}</p>
            <button class="retry-btn" @click="refetch"> Retry</button>
        </div>
        <div v-else class="users-grid">
            <div v-for="user in users" :key="user.id" class="user-card">
                <h3> {{ user.name }}</h3>
                <p><strong> Email:</strong> {{ user.email }}</p>
                <p><strong>City:</strong> {{ user.address.city }}</p>
                <p><strong>Company:</strong> {{ user.company.name }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.users-view {
  max-width: 980px;
  margin: 18px auto 0;
  padding: 28px;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', Arial, sans-serif;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px);
  border-radius: 22px;
  box-shadow: 0 8px 30px rgba(139, 92, 246, 0.12),
              0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.7);
}
h1 {
  color: #1B2A4A;
  margin-bottom: 4px;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.4px;
}
.subtitle {
  color: #9ca3af;
  font-size: 13px;
  margin-bottom: 20px;
}
.loading {
  text-align: center;
  padding: 48px;
  color: #7c3aed;
  font-size: 16px;
  font-weight: 600;
}
.error-box {
  background: rgba(254, 242, 242, 0.9);
  border: 1px solid #fca5a5;
  border-radius: 12px;
  padding: 16px;
  color: #dc2626;
}
.retry-btn {
  margin-top: 12px;
  padding: 8px 14px;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}
.retry-btn:hover {
  opacity: 0.92;
}
.users-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}
.user-card {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(224, 215, 255, 0.7);
  border-radius: 16px;
  padding: 18px;
  transition: all 0.2s;
}
.user-card:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: #a78bfa;
  box-shadow: 0 6px 18px rgba(124, 58, 237, 0.1);
  transform: translateY(-2px);
}
.user-card h3 {
  margin-bottom: 10px;
  color: #1B2A4A;
  font-size: 18px;
}
.user-card p {
  margin: 7px 0;
  font-size: 14px;
  color: #4A5568;
  line-height: 1.4;
}
</style>