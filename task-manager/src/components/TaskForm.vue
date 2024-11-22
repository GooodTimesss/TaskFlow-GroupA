<template>
    <form @submit.prevent="submitTask" class="card p-3">
      <input 
        v-model="title" 
        class="form-control mb-3" 
        placeholder="Task Title" 
        required 
      />
      <textarea 
        v-model="description" 
        class="form-control mb-3" 
        placeholder="Task Description"
      ></textarea>
      <button 
        type="submit" 
        class="btn btn-success btn-block"
        :disabled="!title || !description"
      >
        Add Task
      </button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: '',
      };
    },
    methods: {
      submitTask() {
        this.$emit('add-task', {
          id: Date.now(),
          title: this.title,
          description: this.description,
          status: 'To Do',
        });
        this.title = '';
        this.description = '';
      },
    },
  };
  </script>
  
  
  
  