<template>
  <div>
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
    <div v-if="filteredTasks.length === 0" class="alert alert-info">
      No tasks found. Try a different search query.
    </div>

    <transition-group name="fade" tag="ul" class="list-group">
      <TaskItem 
        v-for="task in filteredTasks" 
        :key="task.id" 
        :task="task" 
        @delete-task="$emit('delete-task', task.id)"
        @update-status="$emit('update-status', task.id, $event)"
      />
    </transition-group>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
    searchQuery: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },
  components: { TaskItem },
  computed: {
    filteredTasks() {
      if (!this.searchQuery) {
        return this.tasks;
      }
      const lowerQuery = this.searchQuery.toLowerCase();
      return this.tasks.filter(task =>
        task.title.toLowerCase().includes(lowerQuery) ||
        task.description.toLowerCase().includes(lowerQuery)
      );
    },
  },
};
</script>


<style>
    .fade-enter-active, .fade-leave-active {
        transition: all 0.3s ease;
    }
    
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
        transform: translateY(10px);
    }

    ul {
        margin: 0 auto; 
        max-width: 600px; 
    }

    .alert {
        margin: 20px auto; 
        max-width: 400px; 
        padding: 15px; 
        border-radius: 5px; 
        text-align: center; 
        background-color: #dff9fb; 
        color: #0984e3; 
    }
</style>




  
  
  
  