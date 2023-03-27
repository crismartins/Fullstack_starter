import { userAuthStore } from '@/store/userAuth'

export default defineNuxtRouteMiddleware(async () => {
    const store = userAuthStore()
    store.userData = useCookie("user")
    if(!store.userData){
        return navigateTo('/login')
    }
})