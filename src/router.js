import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDoList from './views/ToDoList.vue'
import Notes from './views/Notes.vue'
import Note from './views/Note.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/',
            component: ToDoList,
        },
        {
            path: '/notes',
            component: Notes,
        },
        {
            path: '/notes/note/:id',
            component: Note,
        },
    ],
})
