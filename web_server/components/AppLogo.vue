<template>
    <strong class="logotype">
        <nuxt-link to="/">
            <span class="symbol">
                <AppIcon iconName="ph:code-fill" iconSize="large" />
            </span>
            <span class="type">
                code inner
            </span>
        </nuxt-link>
    </strong>
</template>

<style lang="scss">
    .logotype{
        font-family: $logo_font;
        a{
            display: inline-block;
            vertical-align: middle;
            text-align: center;
            .symbol{
                color: var(--pure_white);
            }
            .type{
                color: var(--pure_white);
                padding: 4px 8px;
                font-size: $size_20px;
                line-height: $size_20px;
            }
        }
    }
</style>