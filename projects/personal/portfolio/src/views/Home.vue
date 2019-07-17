import {listType} from "../enums/listType.enum";
import {listType} from "../enums/listType.enum";
<template>
    <div class="home">
        <HeaderComponent></HeaderComponent>
        <ReplacingImages></ReplacingImages>
        <ListComponent v-for="list in lists" :list="list"></ListComponent>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import HeaderComponent from '../components/HeaderComponent.vue';
    import ReplacingImages from '../components/ReplacingImages.vue';
    import ListComponent from '../components/ListComponent.vue';
    import {listType} from '@/enums/listType.enum';

    export default Vue.extend({
        name: 'home',
        components: {
            HeaderComponent,
            ReplacingImages,
            ListComponent,
        },
        data() {
            return {
                lists: [
                    {
                        type: listType.tech, header: 'Experience With:', items: [
                            {icon: 'js.png', name: 'javascript ES6'},
                            {icon: 'scss.png', name: 'scss'},
                            {icon: 'angular.png', name: 'angular'},
                        ]
                    },
                    {
                        type: listType.project, header: 'Personal Projects', items: [
                            {img: '', description: 'blabla', link: 'http://', tech: 'VUE, Sockets'},
                            {img: '', description: 'blablabla', link: 'http://', tech: 'React, redux'},


                        ]
                    },
                    {
                        type: listType.project, header: 'Commercial Projects', items: [
                            {img: '', description: 'blablabla', link: 'http://', tech: 'Vue'},
                            {img: '', description: 'blabla', link: 'http://', tech: 'Ionic'},
                            {img: '', description: 'blabla', link: 'http://', tech: 'Ionic'},
                            {img: '', description: 'blablabla', link: 'http://', tech: 'Nest.js'},
                        ]
                    },
                ]
            }
        },
    });
</script>
