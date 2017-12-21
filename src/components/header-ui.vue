<template>
    <header class="header">
        <router-link class="header__link" to="/">Home</router-link>
        <router-link class="header__link" to="/">About</router-link>
        <router-link class="header__link" to="/">What ever</router-link>
    </header>
</template>

<script>
    export default {
        name: 'header-ui'
    }
</script>

<style scoped>
    .header {
        height: 80px;
        line-height: 80px;
    }

    @media (max-width: 1024px) {
        .header {
            padding: 0 15px;
        }
    }

    .header__link {
        text-transform: uppercase;
        margin-right:  15px;
    }

    .header__link:last-child {
        margin-right: 0;
    }
</style>
