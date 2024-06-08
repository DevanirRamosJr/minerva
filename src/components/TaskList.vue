<template>
    <div>
        <h1>Tarefas</h1>
        <ul>
            <li v-for="task in tasks" :key="task.id">
                {{ task.title }} - {{ task.description }} - Completada: {{ task.is_completed }} - Buba Coins: {{ task.value}}
            </li>
        </ul>
    </div>
</template>

<script>
import apiClient from '../api/axios';

export default {
    data() {
        return {
            tasks: [],
        };
    },
    async created() {
        try {
            const response = await apiClient.get('/task/get-all');
            this.tasks = response.data;
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    },
};
</script>
