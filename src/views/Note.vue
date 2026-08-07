<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Input from './../components/shared/Input.vue'

export default {
    components: {
        EditorContent,
        Input,
    },

    data() {
        return {
            editor: null,
            title: '',
            timer: null,
        }
    },

    computed: {
        id() {
            return this.$route.params.id
        },

        note() {
            return this.$store.state.notes.find(
                note => note.id == this.$route.params.id
            )
        },
    },

    mounted() {
        if (!this.note) return
        this.title = this.note.title
        this.$nextTick(() => {
            this.editor = new Editor({
                extensions: [StarterKit],
                content: this.note.text,
                onUpdate: ({ editor }) => {
                    this.saveText(editor)
                },
            })
        })
    },
    watch: {
        title(newTitle) {
            this.saveTitle(newTitle)
        },
    },

    methods: {
        saveTitle(title) {
            this.$store.commit('updateNote', {
                id: this.id,
                newTitle: title,
            })
        },

        saveText(editor) {
            this.$store.commit('updateNote', {
                id: this.id,
                newNote: editor.getJSON(),
                newPreview: editor.getText().split('\n')[0],
            })
        },

        focusEditor() {
            this.editor.chain().focus().run()
        },
    },

    beforeDestroy() {
        clearTimeout(this.timer)
        if (this.editor && !this.editor.isDestroyed) {
            this.editor.destroy()
        }
    },
}
</script>

<template>
    <div class="paper-wrapper">
        <Input v-model="title" placeholder="Название заметки:" />
        <div class="paper" @mousedown="focusEditor">
            <EditorContent v-if="editor" :editor="editor" />
        </div>
    </div>
</template>

<style scoped>
.paper-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 80vw;
}

.paper {
    width: 80vw;
    height: 75vh;
    padding: 32px;
    background: white;
}

.paper :deep(.ProseMirror) {
    min-height: 880px;
    outline: none;
}
</style>
