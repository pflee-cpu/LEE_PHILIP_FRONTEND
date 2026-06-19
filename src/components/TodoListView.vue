<!--
=============================================================
  DAY 5 ASSIGNMENT — TodoListView.vue
  Uses useFetch() to load and display todos from JSONPlaceholder
=============================================================
-->
<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '@/composables/useFetch'

const filter = ref('all') // 'all' | 'done' | 'pending'
const search = ref('')
const { data: todos, loading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/todos')
// TODO 1: Call useFetch with the JSONPlaceholder todos endpoint
// Rename 'data' to 'todos' using destructuring alias syntax
const filteredTodos = computed(() => {
  if (!todos.value) return []
  let result = todos.value
  if (filter.value === 'done') {
    result = result.filter(todo => todo.completed)
  } else if (filter.value === 'pending') {
    result = result.filter(todo => !todo.completed)
  }
  if (search.value.trim()) {
    result = result.filter(todo =>
      todo.title.toLowerCase().includes(search.value.toLowerCase())
    )
  }
  return result.slice(0, 20)
})

function toggleTodo(id) {
  if (!todos.value) return
  const todo = todos.value.find(todo => todo.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

// TODO 2: Create a filteredTodos computed() that:
//  - Returns [] if todos.value is null (still loading)
//  - Filters by filter.value ('all' shows first 20, 'done' shows completed, 'pending' shows incomplete)
// const filteredTodos = computed(() => { ... })
</script>

<template>
  <div class="todo-view">
    <h1>📋 Todo List</h1>
    <p class="subtitle">Loaded from JSONPlaceholder API</p>

    <!-- TODO 3: Show a loading message/spinner while loading is true -->
    <div v-if="loading" class="loading">
      Loading todos...
    </div>
    <!-- TODO 4: Show an error message if error has a value -->
    <div v-else-if="error" class="error-box">
      <p>Error: {{ error }} </p>
      <button class="retry-btn" @click="refetch">Retry</button>
    </div>
    
    <!-- TODO 5: Show the content block when NOT loading and NO error -->
    <div v-else>
      <!-- Filter buttons -->
      <div class="filters">
        <button
          @click="filter = 'all'"
          :class="{ active: filter === 'all'}"
          >
          All
        </button>
        <button
          @click="filter = 'done'"
          :class="{active: filter === 'done'}"
          >
          Done
        </button>
        <button
          @click="filter = 'pending'"
          :class="{active: filter === 'pending'}"
          >
          Pending
        </button>
        <!-- TODO 6: Three buttons — All, Done, Pending -->
        <!-- Each sets filter.value and gets :class="{ active: filter === '...' }" -->
      </div>
      <input
        v-model="search"
        class="search-input"
        placeholder="Search todos..."
      />
      <!-- TODO 7: Render filteredTodos using v-for -->
      <ul class="todo-list">
        <!-- li with checkbox (disabled, reflects todo.completed) and title -->
        <li
          v-for="todo in filteredTodos"
          :key="todo.id"
          :class="{'done-item': todo.completed}"
          >
            <input type="checkbox" 
            :checked="todo.completed" 
            @change="toggleTodo(todo.id)" 
            />
           
            <span :class="{'completed-text': todo.completed}">
              {{ todo.title }}
            </span>
        </li>
      
      
      </ul>

      <!-- TODO 8: Show count of visible items -->
       <p class="count">
        Showing {{ filteredTodos.length }} items
       </p>
    </div>
  </div>
</template>

<style scoped>
.todo-view {
  max-width: 720px;
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
.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.filters button {
  padding: 7px 16px;
  border: 1.5px solid #e0d7ff;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.7);
  color: #7c3aed;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s;
}
.filters button:hover {
  background: #ede9fe;
  border-color: #a78bfa;
}
.filters button.active {
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.22);
}
.search-input {
  width: 95%;
  padding: 11px 14px;
  border: 1.5px solid #e0d7ff;
  border-radius: 12px;
  margin-bottom: 16px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.8);
  color: #4c1d95;
  outline: none;
  transition: all 0.2s;
}
.search-input:focus {
  border-color: #a78bfa;
  box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.18);
}
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.todo-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.78);
  border-radius: 12px;
  margin-bottom: 8px;
  border: 1px solid rgba(224, 215, 255, 0.7);
  font-size: 14px;
  transition: all 0.2s;
}
.todo-list li:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: #a78bfa;
  box-shadow: 0 4px 14px rgba(124, 58, 237, 0.08);
}
.todo-list li.done-item {
  opacity: 0.72;
}
.todo-list li span {
  flex: 1;
  color: #1B2A4A;
}
.completed-text {
  text-decoration: line-through;
  color: #9ca3af;
}
.todo-list input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #7c3aed;
  cursor: pointer;
}
.count {
  font-size: 13px;
  color: #8b8fa3;
  margin-top: 12px;
  text-align: right;
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

</style>