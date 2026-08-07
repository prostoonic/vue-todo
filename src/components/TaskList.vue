<script>
import TaskItem from './TaskItem.vue'

export default {
    components: {
        TaskItem,
    },
    computed: {
        tasks() {
            return this.$store.state.tasks
        },
    },
}
</script>

<template>
    <ul class="task-list">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </ul>
</template>

<style scoped>
.task-list {
    width: 100%;

    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>
