<template>
    <div class="container">
        <h2>Welcome to... magazine title</h2>
        <div v-if="showLogin">
            <LogIn @login="goHome"/>
            <p>If you don't have an account you can <span @click="showLogin = false">sign up here.</span></p>
        </div>
        <div v-else>
            <SignUp @signup="goHome"/>
            <p>If you already have an account you can <span @click="showLogin = true">login here.</span></p>
        </div>
    </div>
</template>

<script>
import SignUp from '../../nav/SignUp.vue'
import LogIn from '../../nav/LogIn.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
    components: { SignUp, LogIn },
    setup() {
        const showLogin = ref(true)
        const router = useRouter()

        const goHome = () => {
            router.push({ name: 'Home' })
        }

        return { showLogin, goHome }
    }
}
</script>

<style scoped>
.container {
    text-align: center;
}

h2 {
    padding-top: 5%;
}

span {
    color: green;
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
}
</style>