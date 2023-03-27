<template>
    <div class="container__fit">
        <h1>Login</h1>
        <div class="login-form">
            <form @submit.prevent="onSubmit">
                <div class="input-wrapper">
                    <label for="">username</label>
                    <input type="text" v-model="form.username">
                </div>
                <div class="input-wrapper">
                    <label for="">password</label>
                    <input type="password" v-model="form.password">
                </div>
                <AppButton buttonSize="medium" class="primary" :disabled="!form.username || !form.password">
                    Login
                </AppButton>
            </form>

            <AppButton buttonSize="medium" class="custom" @click.prevent="google()" role="button" :disabled="!form.username || !form.password">
                <AppIcon iconSize="medium" iconName="ph:google-logo-bold" /> Sign In with Google
            </AppButton>

            <AppButton buttonSize="medium" class="text" @click.prevent="navigateTo('/register')" role="button">
                Create New Account
            </AppButton>
        </div>
    
       
    </div>
</template>

<script setup>

    import { userAuthStore } from '@/store/userAuth'
    const store = userAuthStore()

    const form = reactive({
        username: "",
        password: "",
    })

    async function onSubmit() {
        await store.loginUser(form)
    }
    async function google() {
        await store.loginGoogle()
    }

    definePageMeta({
        layout: 'login'
    })
</script>

<style lang="scss" scoped>
    .container__fit{
        h1{
            color: var(--pure_white);
        }
        .login-form{
            background-color: var(--pure_white);
            padding: 40px;
            border: $border_default;
            border-radius: $radius_default;
            box-shadow: $large_box_shadow;
        }
        button{
            min-width: 100%;
            margin: 8px 0;
            &.custom{
                background-color: #de4444;
                color: var(--pure_white);
            }
        }
    }
</style>