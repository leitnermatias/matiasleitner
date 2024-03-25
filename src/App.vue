<template>
  <main>
    <nav id="contact">
      <p>Contact me:</p>
      <a href="https://www.linkedin.com/in/matias-leitner-05b1241b5/" target="_blank" style="color: blue" class="contact-link">
        <v-icon name="pr-linkedin" :scale="1.8" />
      </a>
      <a href="https://github.com/leitnermatias" target="_blank" style="color: black" class="contact-link">
        <v-icon name="bi-github" :scale="1.8" />
      </a>
    </nav>

    <section>
      <p class="typer" v-html="lines"></p>
    </section>
    <h1 class="title">My projects</h1>
    <section id="projects">

      <Project 
      title="Autobattler"
      github="https://github.com/leitnermatias/autobattler"
      link="https://autobattler.matiasleitner.com"
      description="A game that plays itself, targeting random enemies and progressing the player through levels"
      />

      <Project 
      title="Diarios API"
      github="https://github.com/leitnermatias/diarios"
      description="A standalone API that scrapes different news outlets from Argentina."
      />

      <Project 
      title="MatiOS"
      github="https://github.com/leitnermatias/matios"
      description="A simple operative system implemented as a page."
      />

      <Project 
      title="Portfolio"
      github="https://github.com/leitnermatias/matiasleitner"
      description="This site."
      />
      
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Project from "./components/Project.vue"


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
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  margin: auto;
}

#projects {
  display: flex;
  flex-direction: column;
  gap: 2em;
}

.title {
  color: #313638;
  font-weight: bold;
  text-align: center;
}

nav {
  display: flex;
  align-items: center;
  gap: 1em;
  position: sticky;
  top: 0;
  background-color: #E8E9EB;
}

nav p {
  color: #313638;
  font-weight: bolder;
}

@media only screen and (min-width : 1025px) { 
  #projects {
    width: 800px;
    margin: auto;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .typer {
    width: 400px;
  }

  nav {
    width: 650px;
    margin: auto;
  }
}

</style>
