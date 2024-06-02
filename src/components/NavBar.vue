<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link to="/">Ver Tarefas</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add-task">Adicionar Tarefas</router-link>
      </li>
    </ul>
  </nav>
</template>

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