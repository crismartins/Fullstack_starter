<template>
    <div class="theme-switcher" :class="`theme-`+$colorMode.preference">
        <input id="light" ref="theme" type="radio" v-model="$colorMode.preference" value="light" />
        <input id="dark" ref="theme" type="radio" v-model="$colorMode.preference" value="dark" />
        <label for="light">
            <AppIcon iconName="ph:sun-dim"/>
        </label>
        <label for="dark">
            <AppIcon iconName="ph:sunglasses-fill"/>
        </label>
    </div>
</template>

<script setup>
    
</script>

<style lang="scss">
    .theme-switcher{
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: relative;
        background-color: var(--lighter_color);
        border-radius: 60px;
        input{
            display: none;
        }
        label{
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            padding: 0;
            cursor: pointer;
            .icon__wrapper{
                .icon{
                    font-size: 20px;
                    color: var(--text_lighter_color);
                }
            }
            z-index: 1;
        }
        &:before{
            content: '';
            width: 36px;
            height: 36px;
            background-color: var(--pure_white);
            border-radius: 60px;
            position: absolute;
            z-index: 0;
            transition: $default_transition;
            border: 2px solid var(--lighter_color);
            box-sizing: border-box;
        }
        &.theme-light{
            &:before{
                left: 0;
            }
        }
        &.theme-dark{
            &:before{
                left: calc(100% - 36px);
            }
        }
    }
</style>