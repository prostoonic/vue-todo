<script>
import Button from '../components/shared/Button.vue'
import Modal from '../components/shared/Modal.vue'
import TaskForm from '../components/TaskForm.vue'
import TaskList from '../components/TaskList.vue'
export default {
    components: {
        TaskForm,
        TaskList,
        Modal,
        Button,
    },
    computed: {
        isModalOpen() {
            return this.$store.state.isModalOpen
        },
    },
    methods: {
        deleteTask() {
            this.$store.commit('deleteTask', this.$store.state.deleteTaskId)
        },
        closeModal() {
            this.$store.commit('closeModal')
        },
    },
}
</script>

<template>
    <div class="page">
        <Modal :isOpen="isModalOpen">
            <div class="modal-content">
                <h2>Вы точно хотите удалить задачу ?</h2>
                <div class="button-group">
                    <Button
                        type="button"
                        text="Да"
                        variant="danger"
                        @click="deleteTask"
                    />
                    <Button
                        type="button"
                        text="Нет"
                        variant="secondary"
                        @click="closeModal"
                    />
                </div>
            </div>
        </Modal>
        <div class="wrapper">
            <TaskForm />
            <TaskList />
        </div>
    </div>
</template>

<style>
.page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    max-width: 620px;
    gap: 28px;
    width: 100%;
}

.button-group {
    display: flex;
}
</style>
