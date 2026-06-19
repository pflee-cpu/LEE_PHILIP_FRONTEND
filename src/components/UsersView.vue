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
    max-width: 900px;
    margin: 40px auto;
    padding: 24px;
    font-family: Arial, sans-serif;
}

h1 {
    color: #1B2A4A;
    margin-bottom: 4px;
}

.subtitle {
    color: #9ca3af;
    font-size: 13px;
    margin-bottom: 20px;
}

.loading {
    text-align: center;
    padding: 48px;
    color: #42B883;
    font-size: 16px;
}

.error-box {
    background: #fef2f2;
    border: 1px solid #fca5a5;
    border-radius: 8px;
    padding: 16px;
    color: #dc2626;
}

.retry-btn {
    margin-top: 12px;
    padding: 8px 14px;
    background: #42B883;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
}

.users-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
}

.user-card {
    background: white;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 16px;
}

.user-card h3 {
    margin-bottom: 10px;
    color: #1B2A4A;
}

.user-card p {
    margin: 6px 0;
    font-size: 14px;
    color: #4A5568;
}

</style>