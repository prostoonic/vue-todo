<script>
import NoteList from '../components/NoteList.vue'
import Button from '../components/shared/Button.vue'

export default {
    components: {
        Button,
        NoteList,
    },

    methods: {
        createNote() {
            const note = {
                id: crypto.randomUUID().slice(0, 8),
                text: '',
                title: '',
                preview: '',
            }
            this.$store.commit('addNote', note)
            this.$router.push(`/notes/note/${note.id}`)
        },
    },
}
</script>

<template>

    <div class="notes-page">
        <Button text="Создать" variant="primary" @click="createNote" />
        <NoteList />
    </div>
</template>

<style scoped>
.notes-page {
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>
