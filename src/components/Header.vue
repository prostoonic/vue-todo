<script>
export default {}
</script>

<template>
    <header>
        <nav>
            <div
                class="link-wrapper"
                :class="this.$route.path === '/' ? 'active' : ''"
            >
                <router-link to="/"> TODO </router-link>
            </div>
            <div
                class="link-wrapper"
                :class="this.$route.path === '/notes' ? 'active' : ''"
            >
                <router-link to="/notes"> Notes </router-link>
            </div>
        </nav>
    </header>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: center;
    gap: 16px;
}
.link-wrapper {
    background-color: #6366f1;
    display: flex;
    height: 46px;
    width: 150px;

    padding: 8px 16px;

    border: none;

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;

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
}
a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    width: 100%;
    color: white;
    text-decoration: none;
}
.active {
    background-color: #7f81fb !important;
}
</style>
