import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: [],
        notes: [],
        isEdit: false,
        editTaskId: '',
        editTaskTitle: '',
        isModalOpen: false,
        deleteTaskId: '',
    },
    plugins: [createPersistedState()],

    mutations: {
        addTask(state, task) {
            state.tasks.push(task)
            console.log(state.tasks)
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter(item => item.id !== id)
            state.isModalOpen = false
        },
        updateTask(state, { id, newTitle }) {
            state.tasks = state.tasks.map(task => {
                if (task.id === id) {
                    state.editTaskTitle = task.title
                    return {
                        ...task,
                        title: newTitle,
                    }
                }

                return task
            })
        },
        toggleCompleteTask(state, { id, isComplete }) {
            console.log({ id, isComplete })
            state.tasks = state.tasks.map(task => {
                if (task.id === id) {
                    state.editTaskTitle = task.title
                    return {
                        ...task,
                        isComplete,
                    }
                }

                return task
            })
        },
        toggleIsEdit(state, id) {
            state.isEdit = !state.isEdit
            state.editTaskId = id
        },
        cancelEdit(state) {
            state.isEdit = false
            state.editTaskId = ''
            state.editTaskTitle = ''
        },
        openModal(state) {
            state.isModalOpen = true
        },

        closeModal(state) {
            state.isModalOpen = false
        },
        setDeleteTaskId(state, id) {
            state.deleteTaskId = id
        },
        addNote(state, note) {
            state.notes.push(note)
            console.log(state.notes)
        },
        updateNote(state, { id, newNote, newTitle, newPreview }) {
            const note = state.notes.find(note => note.id === id)

            if (!note) return

            if (newTitle !== undefined) {
                note.title = newTitle
            }

            if (newNote !== undefined) {
                note.text = newNote
            }

            if (newPreview !== undefined) {
                note.preview = newPreview
            }
        },

        deleteNote(state, id) {
            state.notes = state.notes.filter(item => item.id !== id)
        },
    },
})
