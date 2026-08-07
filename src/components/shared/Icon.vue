<script>
import * as Icons from 'vue-feather-icons'

export default {
    props: {
        name: {
            type: String,
            default: '',
        },
    },

    computed: {
        iconComponent() {
            return Icons[`${this.name}Icon`] || null
        },
    },
}
</script>

<template>
    <component :is="iconComponent" v-if="iconComponent" />
</template>
