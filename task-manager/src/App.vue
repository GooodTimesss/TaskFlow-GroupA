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
import axios from 'axios';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

export default {
  name: 'App',
  components: { TaskForm, TaskList },
  data() {
    return {
      tasks: [], // Task list fetched from the backend
      searchQuery: '', // Search query for filtering tasks
      loading: false, // Loading state
      error: null, // Error message
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
    async fetchTasks() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        this.tasks = response.data;
      } catch (error) {
        this.error = 'Failed to fetch tasks. Please try again.';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    async addTask(newTask) {
      this.error = null;
      try {
        const response = await axios.post('http://localhost:5000/tasks', newTask);
        this.tasks.push(response.data);
      } catch (error) {
        this.error = 'Failed to add task. Please try again.';
        console.error(error);
      }
    },
    async deleteTask(id) {
      this.error = null;
      try {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        this.tasks = this.tasks.filter(task => task.id !== id);
      } catch (error) {
        this.error = 'Failed to delete task. Please try again.';
        console.error(error);
      }
    },
    async updateTaskStatus(id, status) {
      this.error = null;
      try {
        // Make the API request to update the status
        await axios.put(`http://localhost:5000/tasks/${id}`, { status });

        // Re-fetch tasks to get the updated list
        await this.fetchTasks();
      } catch (error) {
        this.error = 'Failed to update task status. Please try again.';
        console.error(error);
      }
    }
  },
  async mounted() {
    await this.fetchTasks();
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



