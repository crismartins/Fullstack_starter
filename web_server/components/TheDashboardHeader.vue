<template>
    <header>
        <div class="container__fluid">
            <div class="left-header">
                <AppIcon @click="navigateTo('/')" title="Return to Home" iconName="ph:house-light" iconSize="medium" />

                <AppIcon iconName="ph:caret-right-bold" iconSize="small" />
                <h1>
                    Dashboard
                </h1>
            </div>
            <div class="right-header">
                <AppThemeSwitcher />
                <AppButton @click="logOut" buttonSize="small" class="text" title="Log Out">
                    <AppIcon iconName="ph:sign-out" iconSize="medium" />
                </AppButton>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { userAuthStore } from '@/store/userAuth'

    const auth = userAuthStore()

    async function logOut() {
        await auth.logoutUser()
    }
</script>

<style lang="scss" scoped>
    header{
        .container__fluid{
            padding: 20px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h1{
                margin: 0;
                text-transform: capitalize;
            }
            .left-header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 8px;
            }
            .right-header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
            }
        }
    }
</style>