<template lang="html">

    <section class="replacing-images" ref="replacingImages">

    </section>

</template>

<script lang="js">
    export default {
        name: 'replacing-images',
        props: [],
        mounted() {

        },
        data() {
            return {
                colors: [
                    '#111',
                    '#222',
                    '#333',
                    '#444',
                    '#555',
                    '#666',
                    '#777',
                    '#888',
                    '#999',
                    '#AAA',
                    '#BBB',
                    '#CCC',
                    '#DDD',
                    '#EEE',
                    '#FFF',
                ],
                interval: '',
            };
        },
        methods: {
            initInterval() {
                let i = 0;
                this.interval = setInterval(() => {
                    this.$refs.replacingImages.style.backgroundColor = this.colors[i]
                    if (i < 16) {
                        i++;
                    } else {
                        i = 0;
                    }
                    ;

                }, 1000)
            }
        },
        computed: {},
        mounted() {
            this.initInterval()
        },
        destroyed() {
            clearInterval(this.interval);
        }
    }
</script>

<style scoped lang="scss">
    .replacing-images {
        width: 100%;
        height: 500px;
        background-color: black;
    }
</style>
