<script>
import NoteItem from './NoteItem.vue'

export default {
    components: {
        NoteItem,
    },

    computed: {
        notes() {
            return this.$store.state.notes
        },
    },
}
</script>

<template>
    <ul class="notes-grid">
        <NoteItem
            v-for="note in notes"
            :key="note.id"
            :id="note.id"
            :note-title="note.title"
            :note-text="note.preview"
        />
    </ul>
</template>

<style scoped>
.notes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 320px));
    gap: 24px;
    width: 100%;
    margin: 30px 0 0;
    padding: 0;
    justify-content: start;
}
</style>
