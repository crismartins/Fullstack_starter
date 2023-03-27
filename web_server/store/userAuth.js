import { defineStore } from "pinia";

export const userAuthStore = defineStore ("userAuthentication", {
    state: () => ({ 
        userData: null,
    }),
    getters: {
    },
    actions: {
        async registerUser(form){
            const config = useRuntimeConfig();
            const api = config.public.apiBase;
            try{
                const response = await $fetch(api+"/register", {
                    method: 'POST',
                    body: form,
                });
                this.userData = response;
                
                navigateTo('/login')
            } catch (error) {
                console.log(error)
                return error
            }
        },
        async loginUser(form){
            const config = useRuntimeConfig();
            const api = config.public.apiBase+"/login";
            
            try{
                const response = await $fetch(api,{
                    method: 'POST',
                    body: form,
                });
                this.userData = response;

                await navigateTo('/dashboard');
            } catch (error) {
                console.log(error)
                return error
            }
        },
        async loginGoogle(){
            const config = useRuntimeConfig();
            const api = config.public.apiBase+"/auth/google";
            try{
                const response = await $fetch(api);
                console.log(response)
            }catch (error) {
                console.log(error)
                return error
            }
        },
        async logoutUser(){
            const config = useRuntimeConfig();
            const api = config.public.apiBase+"/logout";
            try{
                const response = await $fetch(api,{
                    method: 'POST',
                });
                this.userData = response || null;

                navigateTo('/login');
            } catch (error) {
                console.log(error)
                return error
            }
        }
    }
})
