<template>
    <div >
            <form @submit.prevent="onSubmit">
            <h1>Hello there!</h1>
            <p>
                Log in to see all the Projects
            </p>
                <AppLoading v-if="loading" />

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
                <AppIcon iconSize="medium" iconName="logos:google-icon" /> 
                Sign In with Google
            </AppButton>

            <AppButton buttonSize="medium" class="text" @click.prevent="navigateTo('/register')" role="button">
                Create New Account
            </AppButton>
    
    </div>
</template>

<script setup>

    import { userAuthStore } from '@/store/userAuth'
    const store = userAuthStore()

    const form = reactive({
        username: "",
        password: "",
    })

    const loading = ref(false)

    async function onSubmit() {
        loading.value = true
        await store.loginUser(form)
        loading.value = false
    }
    async function google() {
        loading.value = true
        await store.loginGoogle()
        loading.value = false
    }

    definePageMeta({
        layout: 'login'
    })
</script>

<style lang="scss" scoped>
    button{
        min-width: 100%;
        margin: 8px 0;
        &.custom{
            background-color: var(--pure_white);
            color: var(--primary_text_color);
        }
    }
</style>