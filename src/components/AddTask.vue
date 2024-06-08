<template>
  <div class="container">
    <div class="form-container">
      <h2>Adicionar Tarefa</h2>
      <form @submit.prevent="addTask">
        <div class="form-group">
          <label for="title">Título:</label>
          <input type="text" id="title" v-model="title" required>
        </div>
        <div class="form-group">
          <label for="description">Descrição:</label>
          <textarea id="description" v-model="description" rows="5" required></textarea>
        </div>
        <div class="form-group">
          <div><label>Ocorrência:</label></div>
          <input type="radio" id="daily" value="daily" v-model="type">
          <label for="daily">Diariamente </label>

          <input type="radio" id="weekly" value="weekly" v-model="type">
          <label for="weekly">Semanalmente</label>
        </div>
        <div class="form-group">
          <label for="value">Buba Coins:</label>
          <input type="number" id="value" v-model="value">
        </div>
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  </div>
</template>

<script>
import apiClient from '../api/axios';

export default {
  data() {
    return {
      title: '',
      description: '',
      type: 'Diariamente',
      value: 0,
    };
  },
  methods: {
    async addTask() {
      try {
        const newTask = {
          title: this.title,
          description: this.description,
          type: this.type,
          is_completed: false,
          value: this.value,
          created: Date.now(),
        };
        await apiClient.post('/task/create', newTask);
        this.$router.push('/');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    },
  },
};
</script>

<style scoped>


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  //background-color: #f5f5f5;
  font-family: 'Rosemary',serif;
  font-size: 22px;
}

.form-container {
  background-color: rgba(242, 155, 247, 0.98);
  padding: 3rem;
  border-radius: 18px;
  box-shadow: 0 5px 15px rgba(20, 19, 19, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;

}

h2 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 0.5rem;
  width: 100%;
}

label {
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="number"],
input[type="radio"] {
  margin-right: 0.5rem;
}

textarea,
input[type="text"],
input[type="number"] {
  width: calc(100% - 0.5rem);
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
}

button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
}

button:hover {
  background-color: #003778;
}
</style>
