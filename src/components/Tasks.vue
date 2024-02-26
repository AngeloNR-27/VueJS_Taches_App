<template>
  <header>
    <div class="logo">
      TasksMaster
    </div>
    <button class="btn_deconnexion">Deconnexion</button>
  </header>
  <div class="container body">
    <form @submit.prevent="addTask" class="mb-3">
      <div class="form-group">
        <label for="newTaskTitle">Titre:</label>
        <input type="text" class="form-control" id="newTaskTitle" v-model="newTask.titre" required />
      </div>
      <div class="form-group">
        <label for="newTaskDescription">Description:</label>
        <input type="text" class="form-control" id="newTaskDescription" v-model="newTask.description" required />
      </div>
      <div class="form-group">
        <label for="newTaskStatus">Status:</label>
        <select class="form-control" id="newTaskStatus" v-model="newTask.status" required>
          <option disabled value="">Sélectionnez le statut</option>
          <option>A faire</option>
          <option>En cours</option>
          <option>Terminé</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary mt-2">Ajouter une tâche</button>
    </form>

    <table class="table">
      <thead class="thead-light">
        <tr>
          <th>Titre</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>
            <span v-if="!task.editMode">{{ task.titre }}</span>
            <input v-else type="text" v-model="task.titre" />
          </td>
          <td>
            <span v-if="!task.editMode">{{ task.description }}</span>
            <input v-else type="text" v-model="task.description" />
          </td>
          <td>
            <span v-if="!task.editMode">{{ task.status }}</span>
            <select v-else v-model="task.status">
              <option disabled value="">Sélectionnez le statut</option>
              <option>A faire</option>
              <option>En cours</option>
              <option>Terminé</option>
            </select>
          </td>
          <td>
            <button class="button1" @click="toggleEditMode(task)">
              {{ task.editMode ? 'Enregistrer' : 'Editer' }}
            </button>
            <button class="button2" @click="deleteTask(task.id)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.btn-primary {
  background-color: #294122;
  border-color: #294122;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background-color: #1b2e1b;
  border-color: #1b2e1b;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover,
.btn-danger:focus,
.btn-danger:active {
  background-color: #c82333;
  border-color: #bd2130;
}

.form-group label {
  font-weight: bold;
}

.form-control {
  border-radius:  0.25rem;
}

table {
  width:  100%;
  margin-top:  20px;
}

table thead th {
  background-color: #294122;
  color: white;
}

table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tbody tr:hover {
  background-color: #ddd;
}
</style>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: {
        titre: '',
        description: '',
        status: ''
      }
    };
  },
  methods: {
    toggleEditMode(task) {
      task.editMode = !task.editMode;
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      this.saveTasks();
    },
    addTask() {
      const newTask = {
        id: Date.now(), // Utilisez le timestamp actuel comme identifiant unique simple
        titre: this.newTask.titre,
        description: this.newTask.description,
        status: this.newTask.status,
        editMode: false
      };
      this.tasks.push(newTask);
      this.saveTasks();
      
      // Réinitialiser les entrées du formulaire
      this.newTask.titre = '';
      this.newTask.description = '';
      this.newTask.status = '';
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    loadTasks() {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    }
  },
  created() {
    this.loadTasks();
  }
};
</script>
