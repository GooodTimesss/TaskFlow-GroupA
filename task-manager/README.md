# TaskFlow - Vue.js Project

## Overview
TaskFlow is a task management application built with Vue.js. It allows users to organize their tasks efficiently by providing features such as adding, updating, searching, and deleting tasks. The app is designed with a clean and responsive user interface and saves tasks in the browser's local storage for persistence.

## Features
- **Add Tasks**: Users can add new tasks with a title and description.
- **Update Status**: Tasks can be marked as "In Progress" or "Done" with just one click.
- **Delete Tasks**: Remove completed or unnecessary tasks.
- **Search Functionality**: Search tasks dynamically by title or description.
- **Transitions**: Smooth animations when tasks are added or removed.
- **Persistence**: Tasks are saved in the browser's local storage, so they persist even after refreshing the page.
- **Responsive Design**: Optimized for desktops and mobile devices using CSS and Bootstrap.

---

## Setup Instructions

### Prerequisites
Before you begin, ensure you have the following installed on your machine:
- **Node.js** (version 14 or later)
- **npm** (Node Package Manager)
- A web browser (e.g., Chrome, Firefox)

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/GooodTimesss/TaskFlow-GroupA.git
   cd TaskFlow-GroupA
   
2. Install dependencies: Inside the project folder, run the following command to install the required dependencies:
   ```bash
   npm install
   
3. Run the development server: Start the local development server:
   ```bash
   npm run serve

4. View the application: Open your browser and go to:
   ```bash
   http://localhost:8080
   
5. Build for production (optional): To create an optimized production build, run:
   ```bash
   npm run build


## Folder Structure

Below is the structure of the project's main files and folders:

   ```bash
   src/
   ├── components/
   │   ├── TaskForm.vue       # Form for adding new tasks
   │   ├── TaskList.vue       # Displays the list of tasks
   │   └── TaskItem.vue       # Individual task item with actions
   ├── App.vue                # Root component
   ├── main.js                # Entry point for the app
   ├── assets/                # Static assets (e.g., images)
   ├── styles/                # Custom CSS styles
   ├── localStorage.js        # Handles local storage persistence
   ```

## Features Breakdown

- **Add Tasks**: Enter a title and description into the form fields.
                 Click "Add Task" to save the task.
- **Update Status**: Use the "In Progress" or "Done" buttons to update a 
                     task's status.
- **Delete Tasks**: Click the "Delete" button to remove a task permanently.
- **Search Functionality**: Type in the search bar to filter tasks dynamically by title or description.

## Contributors

Sadio SYLLA - Developer
Kellianne LAWS - Developer

## Technologies Used

- **Vue.js:** Frontend framework for building the UI.
- **Bootstrap:** For responsive and visually appealing design.
- **LocalStorage API:** To persist tasks in the browser.
- **CSS:** For custom styles.
  
## License

This project is licensed under the MIT License. 
