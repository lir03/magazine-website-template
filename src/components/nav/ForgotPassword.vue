<template>
    <div class="container">
        <h1>Forgot Your Password?</h1>
        <h3>Get a reset request sent to your email!</h3>
        <form @submit.prevent="forgetPassword">
            <div class="reset-field">
                <label><strong>Enter Your Email: </strong></label> 
                <input type="email" class="email-field" v-model="user.email" />
            </div>
            <button type="submit" class="reset" rounded>Reset Password</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase"
export default {
    data() {
        return {
            user: {
                email: ''
            }
        };
    },
    methods: {
        forgetPassword() {
            firebase
            .auth()
            .sendPasswordResetEmail(this.user.email)
            .then(() => {
                alert('Check your email to reset the password.')
                this.user = {
                    email: ''
                }
            }).catch((error) => {
                alert(error)
            })
        }
    }
};
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

    .reset {
        border: 0;
        border-radius: 20px;
        background-color: rgb(17, 209, 17);
        padding: 10px 20px;
    }

    .error {
        color: red;
    }
    
    .email-field {
        width: 25%;
        margin-bottom: 2%;
    }

    .reset-field {
        margin-top: 3%;
    }

    h3 {
        font-weight: 200;
    }
</style>