<template>
    <div class="container">
        <form @submit.prevent="handleSubmit">
            <h2>Log In</h2>
            <input type="email" required placeholder="email" v-model="email">
            <br>
            <input type="password" required placeholder="password" v-model="password">
            <br><div class="error">{{ error }}</div><br>
            <button @click="scrollToTop()" class="log" rounded>Log In</button>
            <br><br>
            <router-link class="forgot" to="forgot-password">Forgot password</router-link>
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../../composables/useLogin'

export default {
    setup(props, context) {
        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if (!error.value) {
                context.emit('login')
            }
        }

        return {  email, password, handleSubmit, error }
    },

    methods: {
       
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
}

</script>

<style scoped>

.container {
    display: block;
    padding-top: 10%;
    text-align: center;
}

input {
    margin: 5px;
}

.forgot {
    color: green;
    font-weight: 600;
}

.log {
    border: 0;
    border-radius: 20px;
    background-color: rgb(17, 209, 17);
    padding: 10px 20px;
}

.error {
    color: red;
}
</style>