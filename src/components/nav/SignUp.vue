<template>
    <div class="container">
        <form @submit.prevent="handleSubmit">
            <h2>Sign up</h2>
            <input type="text" required placeholder="user name" v-model="displayName">
            <br>
            <input type="email" required placeholder="email" v-model="email">
            <br>
            <input type="password" required placeholder="password" v-model="password">
            <br><div class="error">{{ error }}</div><br>
            <button @click="scrollToTop()" class="sign" rounded>Sign Up</button>
        </form>

    </div>
</template>

<script>
/* eslint-disable */
import { ref } from 'vue'
import useSignup from '../../composables/useSignup'
export default {
    setup(props, context) {
    
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const { error, signup } = useSignup()

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            if (!error.value) {
                context.emit('signup')
            }
        }

        return { displayName, email, password, handleSubmit, error }
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

p {
    padding-top: 2%;
}

.sign {border: 0;
    border-radius: 20px;
    background-color: rgb(17, 209, 17);
    padding: 10px 20px;

}

.error {
    color: red;
}
</style>