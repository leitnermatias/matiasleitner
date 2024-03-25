<template>
    <div class="project">
        <h2 class="project-title">
            {{ title }}
        </h2>
        <div class="icons">
            <a v-if="github" :href="github" class="icon" target="_blank">
            <v-icon name="bi-github" :scale="1.5"/>
            </a>
            <a v-if="link" :href="link" class="icon" target="_blank">
            <v-icon name="oi-link-external" :scale="1.5"/>
            </a>
        </div>
        
        <p class="project-description">
            {{ description }}
        </p>
    
    </div>
</template>

<script setup lang="ts">

defineProps<{
    title: string
    github?: string
    link?: string
    description?: string
}>()

</script>

<style scoped>
.project-title {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.icon {
  color: black;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #313638;
  border-left: 5px solid #F09D51;
  padding-left: 1em;

}

.icons {
    display: flex;
    gap: 1.5em;
}

@media only screen and (min-width : 1025px) { 
    .project {
        width: 350px
    }
}
</style>