<template lang="html">

    <section class="list-component">
        <h1 class="list-header">{{list.header}}</h1>
        <div class="items-wrapper">
            <div class="item" v-for="item in list.items">
                <component :is="listItem" :item="item"></component>
            </div>
        </div>
    </section>

</template>

<script lang="js">
    import {List} from '../entities/List.interface';
    import {listType} from '../enums/listType.enum';
    import ProjectItem from './ProjectItem';
    import TechItem from './TechItem';

    export default {
        name: 'list-component',
        components: {
            TechItem,
            ProjectItem,
        },
        props: {
            list: {
                type: List,
            },
        },
        data() {
            return {};
        },
        methods: {},
        computed: {
            listItem() {
                return this.list.type === listType.project ? ProjectItem : TechItem;
            },
        }
    }
</script>

<style scoped lang="scss">
    .list-component {
        .list-header {
            text-align: left;
            padding-left: 20px;
        }
    }
</style>
