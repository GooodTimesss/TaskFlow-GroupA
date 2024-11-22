<template>
    <li class="list-group-item task-item">
      <div class="task-content">
        <h5 :class="{ done: task.status === 'Done' }">{{ task.title }}</h5>
        <p class="mb-1">{{ task.description }}</p>
        <small 
          class="badge" 
          :class="statusClass"
          :style="{ opacity: task.status === 'Done' ? 0.6 : 1 }"
        >
          {{ task.status }}
        </small>
      </div>
      <div class="task-buttons">
        <button 
          @click="$emit('update-status', 'In Progress')" 
          class="btn btn-warning btn-sm"
        >
          In Progress
        </button>
        <button 
          @click="$emit('update-status', 'Done')" 
          class="btn btn-success btn-sm"
        >
          Done
        </button>
        <button 
          @click="$emit('delete-task')" 
          class="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </li>
</template>
  
<script>
  export default {
    props: ['task'],
    computed: {
      statusClass() {
        switch (this.task.status) {
          case 'To Do':
            return 'bg-primary text-white';
          case 'In Progress':
            return 'bg-warning text-dark';
          case 'Done':
            return 'bg-success text-white';
          default:
            return 'bg-secondary text-white';
        }
      },
    },
  };
</script>
  
<style>
  /* Task container */
  li.task-item {
    display: flex; /* Flexbox for horizontal alignment */
    justify-content: space-between; /* Space between task details and buttons */
    align-items: center; /* Vertically align items */
    margin-bottom: 15px;
    padding: 15px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px; /* Optional: Limit the width */
  }
  
  /* Content container for task details */
  .task-content {
    flex: 1; /* Take up available space */
    margin-right: 15px; /* Add spacing between content and buttons */
    min-width: 0; /* Prevent content overflow */
  }
  
  /* Prevent text from overflowing */
  h5, p {
    white-space: nowrap; /* Prevent wrapping */
    overflow: hidden; /* Hide overflowing text */
    text-overflow: ellipsis; /* Add ellipsis (…) to indicate overflow */
  }
  
  /* Task title styling */
  h5 {
    color: #333;
    margin: 0;
    font-weight: 600;
  }
  
  h5.done {
    color: #aaa; /* Gray out completed tasks */
    text-decoration: line-through;
  }
  
  /* Task description styling */
  p {
    margin: 0;
    color: #666;
  }
  
  /* Buttons container */
  .task-buttons {
    display: flex; /* Align buttons in a row */
    flex-wrap: nowrap; /* Prevent buttons from wrapping */
    gap: 10px; /* Add consistent spacing between buttons */
    align-items: center; /* Ensure vertical alignment */
  }
  
  /* Buttons styling */
  button {
    min-width: 90px; /* Ensure buttons have consistent width */
    text-align: center;
    transition: background-color 0.3s ease; /* Add smooth hover effect */
  }
  
  button:hover {
    opacity: 0.9;
  }
  
  /* Status badge */
  .badge {
    font-size: 0.9rem;
    padding: 5px 10px;
    border-radius: 10px;
  }
</style>
  
  
  
  
  
  
  
  