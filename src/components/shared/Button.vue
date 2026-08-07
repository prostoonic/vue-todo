<script>
import Icon from './Icon.vue'

export default {
    props: {
        type: String,
        text: String,
        variant: String,
        icon: String,
    },
    components: {
        Icon,
    },
}
</script>

<template>
    <button
        :type="type"
        @click="$emit('click', $event)"
        class="button"
        :class="`button--${variant}`"
    >
        <Icon :name="icon" />
        {{ text }}
    </button>
</template>

<style scoped>
.button {
    display: flex;
    max-height: 46px;
    height: 46px;

    padding: 0 16px;

    border: none;

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    border-radius: 12px;

    cursor: pointer;

    transition:
        transform 0.15s ease,
        box-shadow 0.2s ease,
        background 0.2s ease,
        opacity 0.2s ease;

    &:active {
        transform: scale(0.96);
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
}
.button--primary {
    color: white;

    background: #6366f1;

    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.25);

    &:hover {
        background: #4f46e5;

        box-shadow: 0 12px 25px rgba(99, 102, 241, 0.35);
    }
}

.button--secondary {
    color: #374151;

    background: #f3f4f6;

    &:hover {
        background: #e5e7eb;
    }
}

.button--danger {
    color: white;

    background: #ef4444;

    &:hover {
        background: #dc2626;
    }
}

.button--success {
    color: white;

    background: #22c55e;

    &:hover {
        background: #16a34a;
    }
}
</style>
