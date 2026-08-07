<script>
import Header from './components/Header.vue'

export default {
    components: {
        Header,
    },
}
</script>

<template>
    <div>
        <Header />
        <main>
            <router-view />
        </main>
    </div>
</template>

<style scoped>
div {
    width: 100%;
}
main {
    padding: 32px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
}
</style>
