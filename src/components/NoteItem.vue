<script>
import Button from './shared/Button.vue';
import Modal from './shared/Modal.vue';

export default {
    props: {
        noteTitle: {
            type: String,
            default: '',
        },
        noteText: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            required: true,
        },
    },
    components:{
        Button,
    },
    methods:{
        deleteNote(){
            this.$store.commit("deleteNote", this.id)
        }
    }
}
</script>

<template>
    <li class="note-item">
        <div class="button">
            <Button icon="Trash2" @click="deleteNote" />
        </div>
        <router-link class="note-card" :to="`/notes/note/${id}`">
            <h2 class="note-title">
                {{ noteTitle || 'Без названия' }}
            </h2>

            <p class="note-preview">
                {{ noteText || 'Без Текста' }}
            </p>
        </router-link>
    </li>
</template>

<style scoped>
.note-item {
    list-style: none;
    position: relative;
}
.button {
    position: absolute;
    right: 8px;
    top: 8px;
    z-index: 9999;
}

.note-card {
    display: flex;
    flex-direction: column;

    width: 100%;
    min-height: 160px;

    padding: 20px;

    text-decoration: none;
    color: inherit;

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
}

.note-card:hover {
    transform: translateY(-4px);

    box-shadow:
        0 18px 40px rgba(0, 0, 0, 0.1),
        0 6px 18px rgba(0, 0, 0, 0.05);
}

.note-title {
    margin: 0 0 12px;
    width: 75%;

    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-word;

    overflow: hidden;
}

.note-preview {
    margin: 0;

    color: #666;

    font-size: 15px;
    line-height: 1.5;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    word-break: break-word;


    overflow: hidden;
}
</style>
