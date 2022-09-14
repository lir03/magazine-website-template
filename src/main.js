import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BackButton from './components/nav/BackButton.vue'
import NextButton from './components/nav/NextButton.vue'
import TextButton from './components/nav/TextButton.vue'
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).component('BackButton', BackButton).component('NextButton', NextButton).component('TextButton', TextButton).use(router).mount('#app')
    }
})

