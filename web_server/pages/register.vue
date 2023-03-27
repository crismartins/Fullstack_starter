<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="onSubmit">
            <div>
                <label for="">username</label>
                <input type="text" v-model="form.username">
            </div>
            <div>
                <label for="">password</label>
                <input type="password" v-model="form.password">
            </div>
            <button type="submit">
                send
            </button>
        </form>
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
        await store.registerUser(form)
    }

    definePageMeta({
        layout: 'login'
    })

</script>