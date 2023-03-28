<template>
    <div class="body__container">
        <main>
            <div class="container__fit">
                <AppLogo logoSize="big"/>
                <div class="login-form">
                    <slot />
                </div>
            </div>
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
            .container__fit{
                .login-form{
                    max-width: 600px;
                    margin-top: 20px;
                    width: 100%;
                    background-color: var(--pure_white);
                    padding: 40px;
                    border: $border_default;
                    border-radius: $radius_default;
                    box-shadow: $large_box_shadow;
                }
            }
        }
    }
</style>