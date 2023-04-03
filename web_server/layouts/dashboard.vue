<template>
    <div class="body__container">
        <TheSidebar />
        <section>
            <TheDashboardHeader />
            <main>
                <slot />
            </main>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .body__container{
        min-height: 100vh;
        display: flex;
        @media(max-width:$br_tablet){
            max-height: 100vh;
            flex-direction: column;
            flex-flow: column-reverse;
            overflow: hidden;
        }
        section{
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            @media(max-width:$br_tablet){
                min-height: auto;
                overflow: auto;
            }
            main{
                flex-grow: 1;
            }
        }
    }
</style>