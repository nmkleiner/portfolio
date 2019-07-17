<template lang="html">
    <section class="header-component">
        <div class="brand-wrapper">
            <div class="icon-wrapper">
                <img src="" alt="">
            </div>
            <div class="brand-name-wrapper">
                <div class="brand-name">{{brandName}}</div>
            </div>
        </div>
        <div class="contact-wrapper">
            <button class="create-contact-button">
                <i class="contact"></i>
                create contact
            </button>
        </div>
    </section>
</template>

<script lang="js">
    export default {
        name: 'HeaderComponent',
        props: [],
        data() {
            return {
                brandName: `Noam's Portfolio`,
            };
        },
        methods: {},
        computed: {},
    };
</script>

<style scoped lang="scss">
    .header-component {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #111;

        .brand-wrapper {
            display: flex;

            .icon-wrapper {
                margin-left: 10px;
            }

            .brand-name-wrapper {
                padding: 2px 0 5px 0;
                transition: .2s;
                border-bottom: 2px solid transparent;

                &:hover {
                    border-bottom: 2px solid white;
                }

                .brand-name {
                    color: white;
                    font-family: "American Typewriter";
                }
            }
        }

        .contact-wrapper {
            margin-right: 10px;
        }
    }
</style>
