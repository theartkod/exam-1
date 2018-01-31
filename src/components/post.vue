<template>
    <div class="wrap">
        <template v-if="post && post !== null">
            <h1>{{ post.title }}[{{ post.id }}]</h1>
            <p>{{ post.text }}</p>
        </template>
        <template v-else>
            <h3>Такой статьи не существует либо она не загрузилась :(</h3>
        </template>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex';
    export default {
        name: 'post',
        computed: {
            ...mapGetters(['post']),
            ...mapState(['posts'])
        },
        methods: {
            ...mapActions(['setId', 'loadPosts'])
        },
        async mounted () {
            if (this.posts && this.posts.length === 0) {
                try {
                    await this.loadPosts();
                } catch (err) {
                    console.log(err)
                }
            }
            this.setId(+this.$route.params.id);
        }
    };
</script>
