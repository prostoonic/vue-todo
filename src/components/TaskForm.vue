<script>
import Button from './shared/Button.vue'
import Input from './shared/Input.vue'

export default {
    components: {
        Input,
        Button,
    },

    data() {
        return {
            taskTitle: '',
        }
    },

    methods: {
        createTask() {
            this.$store.commit('addTask', {
                id: crypto.randomUUID().slice(0, 8),
                title: this.taskTitle,
                isComplete: false,
            })
            this.taskTitle = ''
        },

        updateTask() {
            console.log('wfegrt')
            this.$store.commit('updateTask', {
                id: this.$store.state.editTaskId,
                newTitle: this.taskTitle,
            })
            this.taskTitle = ''
        },

        cancelForm() {
            this.taskTitle = ''
        },
    },
    computed: {
        isEdit() {
            return this.$store.state.isEdit
        },
    },
    watch: {
        isEdit(value) {
            if (value) {
                const task = this.$store.state.tasks.find(
                    task => task.id === this.$store.state.editTaskId
                )
                this.taskTitle = task.title
            } else {
                this.taskTitle = ''
            }
        },
    },
}
</script>

<template>
    <div class="task-form">
        <h1>{{ isEdit ? 'Редактировать задачу' : 'Создать задачу' }}</h1>

        <form @submit.prevent="isEdit ? updateTask() : createTask()">
            <label for="task-input"> Название задачи </label>

            <Input
                v-model="taskTitle"
                placeholder="Введите название задачи"
                id="task-input"
                type="text"
            />

            <div class="buttons">
                <Button
                    type="submit"
                    :text="isEdit ? 'Сохранить' : 'Создать'"
                    variant="primary"
                />

                <Button
                    type="button"
                    text="Отмена"
                    variant="secondary"
                    @click="cancelForm"
                />
            </div>
        </form>
    </div>
</template>

<style scoped>
.task-form {
    width: 100%;

    padding: 32px;

    background: rgba(255, 255, 255, 0.9);
    border-radius: 24px;

    box-shadow:
        0 20px 40px rgba(0, 0, 0, 0.08),
        0 4px 12px rgba(0, 0, 0, 0.04);

    backdrop-filter: blur(10px);

    display: flex;
    flex-direction: column;
    gap: 28px;

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);

        box-shadow:
            0 25px 50px rgba(0, 0, 0, 0.12),
            0 8px 20px rgba(0, 0, 0, 0.06);
    }

    h1 {
        margin: 0;

        font-size: 30px;
        line-height: 1.2;

        font-weight: 800;

        letter-spacing: -0.5px;

        color: #111827;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    label {
        display: flex;
        flex-direction: column;
        gap: 10px;

        font-size: 14px;
        font-weight: 600;

        color: #374151;
    }

    .buttons {
        display: flex;
        gap: 14px;

        margin-top: 8px;
    }
}
</style>
