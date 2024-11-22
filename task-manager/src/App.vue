<template>
  <div id="app">
    <h1>TaskFlow</h1>
    <div class="input-group mb-3" style="max-width: 400px; margin: 0 auto;">
      <input 
        v-model="searchQuery" 
        placeholder="Search tasks..." 
        class="form-control" 
      />
      <button 
        v-if="searchQuery" 
        @click="clearSearch" 
        class="btn btn-outline-secondary"
      >
        Clear
      </button>
    </div>
    <TaskForm @add-task="addTask" />
    <TaskList 
      :tasks="filteredTasks" 
      :search-query="searchQuery" 
      @delete-task="deleteTask" 
      @update-status="updateTaskStatus" 
    />
    <footer class="text-center mt-5">
      <p>&copy; 2024 TaskFlow. Built with Vue.js 💚</p>
    </footer>
  </div>
</template>

<script>
  import TaskForm from './components/TaskForm.vue';
  import TaskList from './components/TaskList.vue';

  export default {
    name: 'App',
    components: { TaskForm, TaskList },
    data() {
      return {
        tasks: [],
        searchQuery: '', 
      };
    },
    computed: {
      filteredTasks() {
        const query = this.searchQuery.toLowerCase();
        return this.tasks.filter(task => 
          task.title.toLowerCase().includes(query) || 
          task.description.toLowerCase().includes(query)
        );
      },
    },
    methods: {
      addTask(newTask) {
        this.tasks.push(newTask);
      },
      deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
      },
      updateTaskStatus(id, status) {
        const task = this.tasks.find(task => task.id === id);
        if (task) task.status = status;
      },
      clearSearch() {
        this.searchQuery = ''; 
      },
    },
    mounted() {
      const savedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (savedTasks) this.tasks = savedTasks;
    },
    watch: {
      tasks: {
        handler(newTasks) {
          localStorage.setItem('tasks', JSON.stringify(newTasks));
        },
        deep: true,
      },
    },
  };
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
  }

  #app {
    text-align: center;
    padding: 20px;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
  }

  form {
    margin: 20px auto;
    max-width: 400px;
    padding: 15px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  form input,
  form textarea,
  form button {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  form button {
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }

  form button:hover {
    background-color: #36a271;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background: #fff;
    margin: 10px auto;
    padding: 15px;
    max-width: 400px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  li h3 {
    margin: 0 0 5px;
    color: #333;
  }

  li p {
    margin: 5px 0;
    color: #666;
  }

  li button {
    margin-right: 5px;
    padding: 5px 10px;
    font-size: 0.9rem;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  li button:nth-child(1) {
    background: #ffc107;
    color: white;
  }

  li button:nth-child(2) {
    background: #28a745;
    color: white;
  }

  li button:nth-child(3) {
    background: #dc3545;
    color: white;
  }

  li button:hover {
    opacity: 0.9;
  }

  footer {
    margin-top: 50px;
    color: #666;
    font-size: 0.9rem;
    text-align: center;
  }
</style>



