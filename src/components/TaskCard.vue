<!--
=============================================================
  DAY 2 ASSIGNMENT — Reusable TaskCard Component
  Topic: Props, Emits, Slots, Component Lifecycle
  Files: TaskCard.vue (child)  +  TaskListView.vue (parent)
  Time: 60 minutes
=============================================================

OBJECTIVE
---------
Build a reusable TaskCard child component that accepts data as props
and communicates back to the parent via custom events (emits). The
parent renders a list of TaskCards and handles all state changes.

WHAT TO BUILD — TaskCard.vue (this file)
-----------------------------------------
  1. Accept a "task" prop: { id, name, done, dueDate }
  2. Display the task name and dueDate (via a named slot "meta")
  3. Emit "complete" event (payload: task.id) when Complete/Undo clicked
  4. Emit "delete" event (payload: task.id) when Delete clicked
  5. Show "Complete" when task.done is false, "Undo" when true
  6. Apply a visual style change when task.done is true

WHAT TO BUILD — TaskListView.vue (see that file)
-------------------------------------------------
  1. Hold a tasks ref array with at least 3 sample tasks
  2. Render a TaskCard for each task using v-for
  3. Handle @complete → toggle that task's done property
  4. Handle @delete → remove that task from the array
  5. Fill the "meta" named slot with the due date

REQUIREMENTS (Acceptance Criteria)
------------------------------------
  [x] TaskCard uses defineProps({ task: Object })
  [x] TaskCard uses defineEmits(['complete', 'delete'])
  [x] TaskCard has <slot name="meta" /> for optional metadata
  [x] Parent passes :task="task" and listens @complete @delete
  [x] Parent fills the slot with <template #meta>...</template>
  [x] Data flows DOWN (props) and events flow UP (emits)
  [x] Parent owns the state — TaskCard never mutates props directly

EXTENSION (if you finish early)
---------------------------------
  - Add a priority badge prop (low/medium/high) with colour coding
  - Add an edit mode: clicking the task name turns it into an input
  - Emit an "update" event when the edited name is saved

HINTS (read only if stuck)
---------------------------
  Hint 1: const props = defineProps({ task: { type: Object, required: true } })
  Hint 2: const emit = defineEmits(['complete', 'delete'])
  Hint 3: @click="emit('complete', props.task.id)"
  Hint 4: In the parent — @complete="handleComplete"
           function handleComplete(id) { find task by id, toggle done }
  Hint 5: Named slot in child  → <slot name="meta" />
           Fill in parent      → <template #meta>Due: {{ task.dueDate }}</template>
  Hint 6: NEVER do this inside TaskCard: props.task.done = !props.task.done
           That mutates a prop directly — Vue will warn you. Emit instead.
=============================================================
-->

<!-- ─── TaskCard.vue ─── -->
<script setup>

import {ref} from 'vue'

const isEditing = ref(false) // track if in editing mode
const editedName = ref ('') // holds new name while typing
function startEdit () { //start edit
  isEditing.value = true
  editedName.value = props.task.name
}

function saveEdit () {
  if (editedName.value.trim()) {
    emit('update', props.task.id, editedName.value.trim())
  }
  isEditing.value = false
}

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
  priority: {
    type: String,
    default: 'low'
  }
});
const emit = defineEmits(['complete', 'delete', 'update']);
</script>

<template>
  <!-- TODO 4: Wrap everything in a div with class "task-card"
               Add :class="{ completed: task.done }" to the wrapper div -->
  <div class="task-card" :class="{ completed: props.task.done }">

    <div class="task-header">

      <!-- TODO 5: Display the task name -->
       <span 
        v-if="!isEditing"
        class="name"
        @click="startEdit"
        style="cursor: pointer;"
        
        >
          {{ props.task.name }}
        </span>
        <input
          v-else
          class="edit-input"
          v-model="editedName"
          @keyup.enter="saveEdit"
          @blur="saveEdit"
          autofocus
        />
            <span class="badge" :class="`badge-${props.priority}`"> 
           {{ props.priority }}

       </span>

      

      <!-- TODO 6: Add the named slot for metadata -->
      <!-- <slot name="meta" /> -->
      <slot name="meta" />

    </div>

    <div class="task-actions">
      <!-- TODO 7: Add Complete/Undo button — text changes based on task.done -->
      <button
        class="btn-complete"
        @click="emit('complete', props.task.id)"
      >
        {{ props.task.done ? 'Undo' : 'Complete' }}
      </button>
      <!--         @click should emit 'complete' with task.id as payload -->

      <!-- TODO 8: Add Delete button — emits 'delete' with task.id -->
      <button
        class="btn-delete"
        @click="emit('delete', props.task.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<style scoped>

.edit-input {
  flex: 1;
  padding: 4px 8px;
  border: 1.5px solid #a78bfa;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  color: #1B2A4A;
  outline: none;
  background: #f5f3ff;
}

.edit-input:focus {
  border-color: #7c3aed;
  box-shadow:  0 0 0 3px rgba(167, 139, 250, 0.2);
}




.badge {
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-low {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #6ee7b7;
}

.badge-medium {
  background-color: #fef3c7;
  color: #92400e;
  border: 1px solid #fcd34d;
}

.badge-high {
  background-color: #fce7f3;
  color: #9d174d;
  border: 1px solid #f9a8d4;
}


.task-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 14px 16px;
  margin-bottom: 12px;
  transition: all 0.2s;
}
.task-card.completed {
  background: #f0fdf4;
  border-color: #86efac;
  opacity: 0.8;
}
.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.task-header span.name {
  font-weight: 600;
  font-size: 15px;
  color: #1B2A4A;
}
.task-header .meta {
  font-size: 12px;
  color: #9ca3af;
}
.task-actions {
  display: flex;
  gap: 8px;
}
.btn-complete {
  padding: 5px 14px;
  background: #42B883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
}
.btn-delete {
  padding: 5px 14px;
  background: #fee2e2;
  color: #dc2626;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
}
</style>
