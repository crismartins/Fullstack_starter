<template>
        <button :class="`button-size__${buttonSize}`">
            <slot></slot>
        </button>
</template>

<script setup>
    const props = defineProps({
        buttonSize: {
            type: String,
            default: "default"
        }
    })
</script>

<style lang="scss" scoped>

button{
    padding: 8px 12px;
    border-radius: 8px;
    border: 2px solid transparent;
    font-family: $primary_font;
    cursor: pointer;
    background-color: var(--neutral_color);
    box-shadow: $default_box_shadow;
    // font-weight: 600;
    &:hover{
        filter: brightness(80%);
    }

    &.button-size{
        &__default{
            font-size: $size_16px;
            padding: 8px 12px;
        }
        &__small{
            font-size: $size_12px;
            padding: 4px 8px;
        }
        &__medium{
            font-size: $size_20px;
            padding: 12px 20px;
        }
        &__large{
            font-size: $size_28px;
            padding: 16px 32px;
        }
    }
    &.primary{
        background-color: var(--primary_color);
        color: var(--pure_white);
        // transform: translateY(0);
        // box-shadow: 0 4px 0 0 rgba(0,0,0,1);
        // &:hover{
        //     transform: translateY(4px);
        //     box-shadow: none;
        // }
        &.outline{
            color: var(--primary_color);
            border-color: var(--primary_color);
            &:hover{
                background-color: var(--primary_color);
                color: var(--pure_white);
            }
        }
    }
    &.secondary{
        background-color: var(--secondary_color);
        &.outline{
            color: var(--secondary_color);
            border-color: var(--secondary_color);
            &:hover{
                background-color: var(--secondary_color);
            }
        }
    }
    &.outline{
        color: var(--neutral_color);
        background-color: transparent;
        border-color: var(--neutral_color);
        &:hover{
            background-color: var(--neutral_color);
            color: var(--neutral_color_darker);
        }
    }
    &.text{
        color: var(--primary_text_color);
        font-size: $size_16px;
        display: inline-block;
        background-color: transparent;
        border: none;
        box-shadow: none;
        &:hover{
            // text-decoration: underline;
            color: var(--primary_color);
        }
    }
}
</style>