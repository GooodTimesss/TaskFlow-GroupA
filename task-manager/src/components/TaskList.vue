<template>
    <div>
      <!-- No tasks alert -->
      <div v-if="tasks && tasks.length === 0" class="alert alert-info">
        No tasks yet! Add one to get started.
      </div>
  
      <!-- Tasks list with transition -->
      <transition-group name="fade" tag="ul" class="list-group">
        <TaskItem 
          v-for="task in tasks" 
          :key="task.id" 
          :task="task" 
          :search-query="searchQuery"
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
        default: () => [], // Ensure `tasks` defaults to an empty array
        },
        searchQuery: {
        type: String,
        default: '',
        },
    },
    components: { TaskItem },
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
        margin: 0 auto; /* Centers the list horizontally */
        max-width: 600px; /* Limits the width for better readability */
    }

    .alert {
        margin: 20px auto; /* Centers the alert horizontally */
        max-width: 400px; /* Limits the width of the alert */
        padding: 15px; /* Adds some internal spacing */
        border-radius: 5px; /* Smooth rounded corners */
        text-align: center; /* Centers the text */
        background-color: #dff9fb; /* Optional: Light blue background for info alert */
        color: #0984e3; /* Optional: Blue text for better contrast */
    }
</style>




  
  
  
  