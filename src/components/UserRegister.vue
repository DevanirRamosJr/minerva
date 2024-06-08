<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">Nome*: </label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="email">Email: </label>
        <input type="email" id="email" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Senha*: </label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Criar</button>
    </form>
    <p style="font-size: 13px">* Significa que é obrigatório</p>
  </div>
</template>

<script>
import apiClient from '../api/axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      try {
        const response = await apiClient.post('/user/create', {
          username: this.username,
          email: this.email,
          password: this.password,
          coins: 0,
        });
        console.log(response)
        this.$router.push('/login');
      } catch (error) {
        console.error('Error registering:', error);
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  max-width: 300px;
  margin: auto;
}

.form-group {
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
}

button {
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
