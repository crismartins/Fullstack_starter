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
        flex-direction: column;
        main{
            flex-grow: 1;
        }
    }
</style>