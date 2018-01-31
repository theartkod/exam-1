<template>
    <div class="app-layout">
        <header-ui></header-ui>
        <router-view></router-view>
    </div>
</template>
<script>
    import HeaderUi from './components/header-ui.vue';

    export default {
        components: {
            HeaderUi
        }
    };

</script>
<style>
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
        line-height: 1.5;
    }

    .app-layout {
        display: block;
        max-width: 1200px;
        margin: 0 auto;
    }
</style>
