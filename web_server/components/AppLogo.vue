<template>
    <strong class="logotype">
        <nuxt-link to="/">
            <span class="symbol" :class="logoSize , logoStyle">
                <AppIcon iconName="ph:code-fill" iconSize="large"/>
            </span>
            <span class="type" :class="logoSize , logoStyle">
                code inner
            </span>
        </nuxt-link>
    </strong>
</template>

<script setup>

    const props = defineProps({
        logoStyle:{
            type: String,
            default: "light"
        },
        logoSize:{
            type: String,
            default: "medium"
        },
    });

</script>

<style lang="scss">
    .logotype{
        font-family: $logo_font;
        display: flex;
        justify-content: center;
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            .symbol{
                color: var(--pure_white);
                &.big{
                    svg{
                        font-size: 48px;
                    }
                }
            }
            .type{
                color: var(--pure_white);
                padding: 4px 8px;
                font-size: 20px;
                line-height: normal;
                display: inline-block;
                &.big{
                    font-size: 36px;
                }
            }
        }
    }
</style>