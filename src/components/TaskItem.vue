<script>
import Button from './shared/Button.vue'

export default {
    props: {
        task: Object,
    },
    components: {
        Button,
    },
    methods: {
        openModal(e) {
            this.$store.commit('openModal')
            this.$store.commit('setDeleteTaskId', this.task.id)
        },
        editTask() {
            this.$store.commit('toggleIsEdit', this.task.id)
        },
        cancelEdit() {
            this.$store.commit('cancelEdit')
        },
        toggleCompleteTask() {
            this.$store.commit('toggleCompleteTask', {
                id: this.task.id,
                isComplete: !this.task.isComplete,
            })
        },
    },
    computed: {
        isEdit() {
            console.log(this.task)
            return this.$store.state.isEdit
        },
    },
}
</script>

<template>
    <li class="task-item">
        <input
            type="checkbox"
            id="isComplete"
            name="isComplete"
            :checked="this.task.isComplete"
            @change="toggleCompleteTask"
        />
        <label for="isComplete">{{ this.task.title }} </label>
        <div class="button-group">
            <Button icon="Trash2" variant="danger" @click="openModal" />
            <Button
                :icon="isEdit ? 'XCircle' : 'Edit3'"
                variant="secondary"
                @click="isEdit ? cancelEdit() : editTask()"
            />
        </div>
    </li>
</template>

<style scoped>
.task-item {
    display: flex;
    align-items: center;
    gap: 18px;

    width: 100%;

    padding: 18px 22px;
    margin: 0;

    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);

    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);

    box-shadow:
        0 12px 30px rgba(0, 0, 0, 0.06),
        0 4px 12px rgba(0, 0, 0, 0.03);

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);

        box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.1),
            0 6px 18px rgba(0, 0, 0, 0.05);
    }

    input[type='checkbox'] {
        width: 22px;
        height: 22px;

        cursor: pointer;
        accent-color: #22c55e;

        flex-shrink: 0;
    }

    label {
        flex: 1;

        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;

        color: #1f2937;

        cursor: pointer;
        user-select: none;

        transition: color 0.2s ease;
    }

    input[type='checkbox']:checked + label {
        color: #9ca3af;
        text-decoration: line-through;
    }
}

.button-group {
    display: flex;
    align-items: center;
    gap: 10px;

    flex-shrink: 0;
}
</style>
