<template lang="html">

    <section class="project-item">
        <h1 class="header">project-item Component</h1>
        {{item.img}} {{item.description}} {{item.link}} {{item.year}} {{item.tech}}
    </section>

</template>

<script lang="js">
    import {ProjectItem} from '../entities/ProjectItem.interface';

    export default {
        name: 'project-item',
        props: {
            item: {
                type: ProjectItem,
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
    .project-item {
        .header {
            text-align: left;
            padding-left: 30px;
        }
    }
</style>
