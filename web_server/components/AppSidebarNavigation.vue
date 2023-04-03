<template>
    <nav>
        <ul>
            <li v-for="nav in navigation.projects" :key="nav.title">
                <a target="_blank" v-if="nav.externalLink" :href="nav.link">
                    <AppIcon :iconName="nav.icon" icon-size="medium" />
                    <span>
                        {{ nav.title }}
                    </span>
                </a>
                <nuxt-link v-else :to="nav.link">
                    <AppIcon :iconName="nav.icon" icon-size="medium" />
                    <span>
                        {{ nav.title }}
                    </span>
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
    
    import { projectsStore } from '@/store/projects'
    const navigation = projectsStore()
</script>

<style lang="scss" scoped>
    .sidebar{
        nav{
            ul{
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                overflow: hidden;
                margin: 0 12px;
                li{
                    margin: 4px 0;
                    a{
                        padding: 12px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 16px;
                        font-weight: 400;
                        color: var(--pure_white);
                        transition: $default_transition;
                        i{
                            margin-right: 0px;
                            transition: $default_transition;
                        }
                        span{
                            opacity: 0;
                            width: 0;
                            white-space: nowrap;
                            overflow: hidden;
                            transition: $default_transition;
                        }
                        &:hover{
                            background-color: var(--pure_white);
                            color: var(--primary_color);
                        }
                    }
                }
            }
        }
        &.active{
            ul{
                li{
                    a{
                        justify-content: flex-start;
                        i{
                            margin-right: 8px;
                        }
                        span{
                            opacity: 1;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>

