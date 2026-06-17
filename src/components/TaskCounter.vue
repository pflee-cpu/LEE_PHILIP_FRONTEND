<!--
=============================================================
  DAY 1 ASSIGNMENT — Reactive Task Counter App
  Topic: Vue 3 Composition API (ref, computed, v-model, v-for)
  Time: 60 minutes
=============================================================

OBJECTIVE
---------
Build a reactive task management app that demonstrates Vue 3's
reactivity system. You will use ref(), computed(), v-model, v-for,
and event handling — the core building blocks of every Vue app.

WHAT TO BUILD
-------------
A single-file Vue component (this file) that:

  1. Has a text input + "Add Task" button to create new tasks.
  2. Displays the task list, each item with:
       - A checkbox to mark it as done
       - The task name (strike-through when done)
       - A "Remove" button
  3. Shows a live stats bar:
       Total Tasks | Done: X | Pending: X
  4. Shows an empty state message when there are no tasks.

REQUIREMENTS (Acceptance Criteria)
------------------------------------
  [x] Use ref() for the text input value
  [x] Use ref() for the tasks array
  [x] Use computed() for total, done, and pending counts
  [x] Use v-model on the text input
  [x] Use v-for with :key to render the task list
  [x] Use @keyup.enter on the input to also trigger addTask
  [x] Prevent adding empty/whitespace-only tasks
  [x] Clear the input after adding a task

EXTENSION (if you finish early)
---------------------------------
  - Add a filter bar: All | Done | Pending — filters the visible list
  - Add a "Clear All Done" button that removes all completed tasks
  - Add a task priority: Low / Medium / High (use a <select> dropdown)

HINTS (read only if stuck)
---------------------------
  Hint 1: import { ref, computed } from 'vue'
  Hint 2: tasks.value.push({ id: Date.now(), name: '...', done: false })
  Hint 3: computed(() => tasks.value.filter(t => t.done).length)
  Hint 4: For :class strikethrough — :class="{ done: task.done }"
  Hint 5: v-model on a checkbox binds to a boolean — v-model="task.done"
  Hint 6: To prevent empty tasks — if (!newTaskName.value.trim()) return

FILE STRUCTURE (this is a single-file component)
-------------------------------------------------
  <script setup>  — all your reactive logic goes here
  <template>      — your HTML markup
  <style scoped>  — your CSS (scoped = only applies to this component)
=============================================================
-->

<script setup>
import { ref, computed } from 'vue'

const currentFilter = ref('all') 
// TODO 1: Create a ref for the text input value (initial value: '')
const newTaskName = ref('')

// TODO 2: Create a ref for the tasks array (initial value: [])
// const tasks = ???
const tasks = ref([])

// TODO 3: Create computed() values for total, done, and pending counts
const totalCount  = computed(() => tasks.value.length)
const doneCount   = computed(() => tasks.value.filter(task => task.done).length)
const pendingCount = computed(() => tasks.value.length - doneCount.value)

const filteredTasks = computed(() => {
  if (currentFilter.value === 'done') {
    return tasks.value.filter(task => task.done)
  }
  if (currentFilter.value === 'pending') {
    return tasks.value.filter(task => !task.done)
  }
  return tasks.value
})

// TODO 4: Write the addTask() function
// - Prevent empty tasks
// - Push a new task object to tasks.value: { id, name, done }
// - Clear the input
function addTask() {
  // your code here
  const addedTaskTrimmed = newTaskName.value.trim()
  if (addedTaskTrimmed.length == 0) return

  const addedTask = {
    id: Date.now(),
    name: addedTaskTrimmed,
    done: false,
    priority: 'none'
  }
  tasks.value.push(addedTask)

  newTaskName.value = '' //
}

// TODO 5: Write toggleTask(id) — flip task.done for the matching task
function toggleTask(id) {
  // your code here
  const checkedTask = tasks.value.find(tasks => tasks.id === id)
  if (checkedTask) {
    checkedTask.done = !checkedTask.done
  }
}

// TODO 6: Write removeTask(id) — filter out the task with this id
function removeTask(id) {
  // your code here
  const removedTaskIndex = tasks.value.findIndex(task => task.id === id)
  tasks.value.splice(removedTaskIndex, 1)
}

function clearAllDone() {
  tasks.value = tasks.value.filter(task => !task.done)
  
}
</script>

<template>
  <div class="app">
    <h1 style="text-align: center;">Task Counter</h1>

    <!-- TODO 7: Add an input with v-model, @keyup.enter, and placeholder -->
    <!-- TODO 8: Add an "Add Task" button with @click="addTask" -->
    <div class="input-row">
      <!-- your input and button here -->
       <input
          v-model="newTaskName"
          @keyup.enter="addTask"
          placeholder="Add a new task..."
        />
        <button @click="addTask">
          Add Task
        </button>

    </div>

    <!-- TODO 9: Display the stats bar using your computed values -->
    <!-- Format: Total: X | Done: X | Pending: X -->
    
    <div class="filters">
      <button
        :class="{active: currentFilter === 'all'}"
        @click="currentFilter = 'all'"
      >
        All ({{ totalCount}})
      </button>
      <button
        :class="{active: currentFilter === 'done'}"
        @click="currentFilter = 'done'"
      >
        Done ({{ doneCount}})
      </button>
      <button
        :class="{active: currentFilter === 'pending'}"
        @click="currentFilter = 'pending'"
      >
        Pending ({{ pendingCount }})
      </button>
      <button
        class="clear-btn"
        @click="clearAllDone"
        v-if="doneCount > 0"
      >
        Clear All Done
      </button>
    </div>
    <!-- TODO 10: Show this message only when the task list is empty -->
    <!-- <p class="empty">No tasks yet. Add one above!</p> -->

      <p
        class ="empty"
        v-if="tasks.length === 0"
      >
        No tasks yet. Add one above!
      </p>

    <!-- TODO 11: Render the task list using v-for -->
    <!-- Each item needs: checkbox (v-model), task name (:class done), remove button -->

    <ul class="task-list">
      <!-- your v-for loop here -->
       <li
        v-for="task in filteredTasks"
        :key="task.id"
      >
        <input
          type="checkbox"
          v-model="task.done"
        />
        <select 
          v-model="task.priority"
          :class="`priority-${task.priority}`"
          >
            
          <option value="none">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <span :class="{ done: task.done }">
          {{ task.name }}
        
        </span>
          
        <button @click="removeTask(task.id)">
          remove
        </button>
      </li>
    </ul>
    
    
  </div>
</template>

<style scoped>

.app {
  max-width: 560px;
  margin: 40px auto;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', Arial, sans-serif;
  padding: 32px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(139,92,246,0.15),
              0 2px 8px rgba(0,0,0,0.6);
  border: 1px solid rgba(255,255,255,0.3);

}


h1 { 
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
 }

.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.input-row input {
  flex: 1;
  padding: 10px 16px;
  border: 1.5px solid #e0d7ff;
  border-radius: 12px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.8);
  color: #4c1d95;
  outline: none;
  transition: all 0.2s;
}
.input-row input:focus {
  border-color: #a78bfa;
  box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.2);
}
.input-row button {
  padding: 10px 20px;
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s;
}

.input-row button:hover {
  opacity: 0.9;
  transform: scale(1.02);
}

.stats {
  font-size: 13px;
  color: #666;
  margin-bottom: 16px;
  padding: 8px 12px;
  background: #e9f7f0;
  border-radius: 6px;
  text-align: center;
}

.empty {
  text-align: center;
  color: #aaa;
  font-style: italic;
  margin: 32px 0;
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
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 14px;
  margin-bottom: 10px;
  border: 1.5px solid rgba(224, 215, 255, 0.6);
  backdrop-filter: blur(10px);
  transition: all 0.2s;
  
}

.task-list li:hover {
  border-color: #a78bfa;
  box-shadow: 0 4px 16px rgba(124, 58, 237, 0.1);
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
}

.task-list li span {
  flex: 1;
  font-size: 14px;
  color: #4c1d95;
  font-weight: 500;
}

/* TODO: Apply this class to task names when task.done is true */
.done {
  text-decoration: line-through;
  color: #aaa;
}

.task-list li button {
  padding: 5px 10px;
  background: rgba(254, 202, 202, 0.6);
  color: #991b1b;
  border: 1.5px solid #fecaca;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}
.task-list li button:hover {
  background: #fecaca;
  transform: scale(1.05);
}
.filters {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}

.filters button {
  padding: 7px 16px;
  border: 1.5px solid #e0d7ff;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: #7c3aed;
  transition: all 0.2s;
}

.filters button:hover {
  border-color: #a78bfa;
  background: #ede9fe;
}

.filters button.active {
  background: linear-gradient(135deg, #7c3aed, #a78bfa);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
}

.clear-btn {
  padding: 7px 16px;
  border: 1.5px solid #fecaca !important;
  background: rgba(254, 202, 202, 0.5) !important;
  border-radius: 20px !important;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: #991b1b !important;
  transition: all 0.2s;
}

.clear-btn:hover {
  background: #fecaca !important;
}

.task-list li select {
  padding: 5px 10px;
  border: 2px solid #e5e7eb;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
  appearance: none;
  text-align: center;
  min-width: 10px;
  transition: all 0.2s;
}

.task-list li select:hover {
  border-color: #42B883;
}
.priority-none   { background-color: white; color: #666; }
.priority-low    { background-color: #f1f1f3; color: #7c3aed; border-color: #c4b5fd; }
.priority-medium { background-color: #e0d7ff; color: #6d28d9; border-color: #a78bfa; }
.priority-high   { background-color: #c4b5fd; color: #4c1d95; border-color: #7c3aed; }

</style>

