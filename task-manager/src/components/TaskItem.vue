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
  li.task-item {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 15px;
    padding: 15px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px; 
  }
  
  .task-content {
    flex: 1; 
    margin-right: 15px; 
    min-width: 0; 
  }
  
  h5, p {
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
  }
  
  h5 {
    color: #333;
    margin: 0;
    font-weight: 600;
  }
  
  h5.done {
    color: #aaa; 
    text-decoration: line-through;
  }
  
  p {
    margin: 0;
    color: #666;
  }
  
  .task-buttons {
    display: flex; 
    flex-wrap: nowrap; 
    gap: 10px; 
    align-items: center; 
  }
  
  button {
    min-width: 90px; 
    text-align: center;
    transition: background-color 0.3s ease; 
  }
  
  button:hover {
    opacity: 0.9;
  }
  
  .badge {
    font-size: 0.9rem;
    padding: 5px 10px;
    border-radius: 10px;
  }
</style>
  
  
  
  
  
  
  
  