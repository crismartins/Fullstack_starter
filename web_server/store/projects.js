import { defineStore } from "pinia";

import projects from "@/data/projects.json";

export const projectsStore = defineStore ("projects", {
    state: () => { 
        return {
            projects,
        }
    }
})
