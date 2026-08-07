<script>
export default {
    props: {
        isOpen: Boolean,
    },
}
</script>

<template>
    <div class="modal" v-if="isOpen">
        <div class="modal-content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.45);

    z-index: 1000;
}

.modal-content {
    background: #fff;

    border-radius: 16px;

    padding: 24px;

    min-width: 400px;
    max-width: 90vw;

    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
</style>
