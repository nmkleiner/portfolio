<template lang="html">

    <section class="tech-item">
        <h1 class="header">tech-item Component</h1>
        {{item.icon}} {{item.name}}
    </section>

</template>

<script lang="js">
    import {TechItem} from '../entities/TechItem.interface';

    export default {
        name: 'tech-item',
        props: {
            item: {
                type: TechItem
            }
        },
        data() {
            return {}
        },
        methods: {},
        computed: {}
    }
</script>

<style scoped lang="scss">
    .tech-item {
        .header {
            text-align: left;
            padding-left: 30px;
        }
    }
</style>
