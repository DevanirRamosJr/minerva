<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Nome: </label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Senha: </label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Logar</button>
    </form>
    <div class="error-message" v-if="error">{{ error }}</div>
    <div class="register-link">
      <p>Não tem uma conta?</p>
      <button @click="goToRegister">Criar</button>
    </div>
  </div>
</template>

<script>
import apiClient, { setAuthToken } from '../api/axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: '', // Add error field
    };
  },
  methods: {
    async login() {
      try {
        const response = await apiClient.post('user/token', {
          username: this.username,
          password: this.password,
        }, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        const { access_token } = response.data;
        setAuthToken(access_token);
        localStorage.setItem('token', access_token);
        this.$router.push('/');
      } catch (error) {
        console.error('Error logging in:', error);
        this.error = '* Nome ou senha incorretos!';
      }
    },
    goToRegister() {
      this.$router.push('/register');
    }
  },
};
</script>

<style scoped>
.login-container {
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
  background-color: #003e83;
}

.error-message {
  color: red;
  margin-top: 1rem;
  text-align: center;
}

.register-link {
  margin-top: 1rem;
  text-align: center;
}

.register-link p {
  margin: 0;
}

.register-link button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background-color 0.3s ease;
}

.register-link button:hover {
  background-color: #175826;
}
</style>
