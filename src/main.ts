import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { BiGithub, OiLinkExternal, PrLinkedin } from "oh-vue-icons/icons"

addIcons(BiGithub, OiLinkExternal, PrLinkedin)

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.mount('#app')
