<template>
    <div class="body__container">
        <main>
            <slot />
        </main>
    </div>
</template>

<style lang="scss" scoped>
    .body__container{
        min-height: 100vh;
        display: flex;
        background-color: var(--primary_color);
        main{
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>