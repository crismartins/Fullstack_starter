<template>
    <div class="container__fluid">
        <h2>
            Hello You!
        </h2>
        <section class="project-list">
            <div class="card" v-for="project in projectsList.projects" :key="project.title">
                
                    <AppIcon :iconName="project.icon" icon-size="large" />
                    <h2>{{ project.title }}</h2>
                    <p>
                        {{ project.details }}
                    </p>
                    <a target="_blank" v-if="project.externalLink" :href="project.link">
                        <span>
                            Go to the project
                        </span>
                    </a>
                    <nuxt-link v-else  :to="project.link">
                        <span>
                            Go to the project
                        </span>
                    </nuxt-link>
                    

            </div>
        </section>
    </div>
</template>

<script setup>
    import { projectsStore } from '@/store/projects'
    
    const projectsList = projectsStore()
    

    definePageMeta({
        layout: 'dashboard',
        middleware: ["auth"]
    })
    
</script>

<style lang="scss" scoped>

.project-list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .card{
        border: 1px solid var(--neutral_color);
        padding: 20px;
        border-radius: 16px;
    }
}
</style>
