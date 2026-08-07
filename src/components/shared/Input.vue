<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },

        placeholder: {
            type: String,
            default: '',
        },

        type: {
            type: String,
            default: 'text',
        },

        id: {
            type: String,
            default: '',
        },
    },
}
</script>

<template>
    <div class="input-wrapper">
        <input
            class="input"
            :type="type"
            :placeholder="placeholder"
            :value="value"
            @input="$emit('input', $event.target.value)"
            :id="id"
        />
    </div>
</template>

<style scoped>
.input-wrapper {
    width: 100%;
}

.input {
    width: 100%;
    height: 48px;

    padding: 0 16px;

    border: 1px solid #e5e7eb;
    border-radius: 14px;

    background: #ffffff;

    font-size: 15px;
    font-weight: 500;

    color: #111827;

    outline: none;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease,
        background 0.2s ease;

    &::placeholder {
        color: #9ca3af;
        font-weight: 400;
    }

    &:hover {
        border-color: #c7d2fe;
    }

    &:focus {
        border-color: #6366f1;

        box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
    }

    &:disabled {
        cursor: not-allowed;

        background: #f9fafb;
        color: #9ca3af;

        opacity: 0.7;
    }
}
</style>
