<template>
  <nav class="navbar" v-if="isAuthenticated">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/">Ver Tarefas</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add-task">Adicionar Tarefa</router-link>
      </li>
      <li class="nav-item">
        <a @click="logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: !!localStorage.getItem('token'),
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
      this.isAuthenticated = false;
    },
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      this.isAuthenticated = !!localStorage.getItem('token');
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 1rem;
}

.nav-item a {
  color: white;
  text-decoration: none;
}

.nav-item a:hover {
  text-decoration: underline;
}
</style>