<template>
    <aside class="sidebar" :class="{active : expandedSidebar}">
        <header>
            <AppLogo class="logotype" />
            <button class="expand-button" @click="openSidebar">
                <AppIcon iconName="ph:caret-right-bold" />
            </button>
        </header>
        <AppSidebarNavigation />
        <footer>
            {{ user.username }}
        </footer>
    </aside>
</template>

<script setup>
    import { userAuthStore } from '@/store/userAuth'
    const auth = userAuthStore()

    const user = computed(() => {
        return auth.userData;
    });

    const expandedSidebar = ref(false)

    function openSidebar(){
        expandedSidebar.value = !expandedSidebar.value
        console.log("value:"+expandedSidebar.value)
    }
</script>

<style lang="scss" >
    .sidebar{
        width: 100px;
        display: flex;
        flex-direction: column;
        background-color: var(--primary_color);
        transition: $default_transition;
        // box-shadow: 0 4px 20px 0px rgba(0,0,0,0.2);
        @media(max-width:$br_tablet){
            width: 100%;
            flex-direction: row;
            align-items: center;
        }
        header{
            display: flex;
            justify-content: center;
            padding: 20px;
            position: relative;
            align-items: center;
            .logotype{
                .type{
                    transition: $default_transition;
                    opacity: 0;
                    width: 0;
                    overflow: hidden;
                    white-space: nowrap;
                    padding: 0;
                }
            }
            .expand-button{
                border: 0;
                transform: rotate(0);
                padding: 0;
                position: absolute;
                right: 0;
                opacity: 0;
                background-color: var(--primary_color);
                width: 36px;
                height: 36px;
                color: var(--pure_white);
                border-radius: 40px;
                cursor: pointer;
                transition: $default_transition;
            }
            &:hover{
                .expand-button{
                    right: -16px;
                    opacity: 1;
                }
            }
        }
        nav{
            flex-grow: 1;
        }
        footer{
            opacity: 0;
        }
        &.active{
            width: 240px;
            header{
                justify-content: flex-start;
                .logotype{
                    .type{
                        opacity: 1;
                        display: flex;
                        width: 100%;
                        padding: 4px 8px;
                    }
                }
                .expand-button{
                    opacity: 1;
                    right: -16px;
                    transform: rotate(180deg);
                }
            }
            footer{
                opacity: 1;
            }
        }
    }
</style>