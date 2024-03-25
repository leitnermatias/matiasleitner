<template>
  <main>
    <section>
      <p class="typer" v-html="lines"></p>
    </section>
    <section id="projects">
      <h1 class="title">My projects</h1>

      <div class="project">
        <h2 class="project-title">
          Autobattler
        </h2>
        <div class="icons">
          <a href="https://github.com/leitnermatias/autobattler" class="icon" target="_blank">
            <v-icon name="bi-github" :scale="1.5"/>
          </a>
          <a href="https://autobattler.matiasleitner.com" class="icon" target="_blank">
            <v-icon name="oi-link-external" :scale="1.5"/>
          </a>
        </div>
        
        <p class="project-description">
          A game that plays itself, targeting random enemies and progressing the player through levels
        </p>
       
      </div>

      <div class="project">
        <h2 class="project-title">
          Portfolio
        </h2>
        <div class="icons">
          <a href="https://github.com/leitnermatias/autobattler" class="icon" target="_blank">
            <v-icon name="bi-github" :scale="1.5"/>
          </a>
          <a href="https://autobattler.matiasleitner.com" class="icon" target="_blank">
            <v-icon name="oi-link-external" :scale="1.5"/>
          </a>
        </div>
        
        <p class="project-description">
          This site.
        </p>
       
      </div>
      
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';


const text = [
  "<code>Hi, thanks for visiting my site.",
  "I'm  Matias Leitner, a Software Engineer originally from Argentina but currently living in Brazil.",
  "",
  "<b>My stack: </b>",
  "Python (Flask, DJango, FastAPI)",
  "TypeScript/JavaScript (VueJS, React)",
  "Golang",
  "Linux",
  "SQL (MySQL, Postgres)</code>"
]

const lines = ref("")

onMounted(async () => {
  for (let i = 0; i < text.length; i++) {
    await handleLine(text[i])

  }
})

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function handleLine(line: string) {
  for (let i = 0; i < line.length; i++) {
    await sleep(10)
    lines.value += line.charAt(i)
    lines.value += "|"
    await sleep(30)
    lines.value = lines.value.substring(0, lines.value.length - 1)
  }

  lines.value += "<br>"
}

</script>

<style scoped>

.typer {
  background-color: #121420;
  color: rgb(0, 255, 0);
  height: 250px;
  padding: 10px;
  border-radius: 10px;
}

#projects {
  display: flex;
  flex-direction: column;
  gap: 2em;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #313638;
  border-left: 5px solid #F09D51;
  padding-left: 1em;

}

.title {
  color: #313638;
  font-weight: bold;
  text-align: center;
}

.project-title {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.icon {
  color: black;
}
</style>
