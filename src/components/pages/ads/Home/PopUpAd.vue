<template>
    <div class="modal-mask" @click='close'>
        <div class="modal-wrapper">
            <button class="hideButton" @click='close'>X</button>
            <div class="modal-container">
                <div class="modal-body">
                    <h1>Popup Notification or Advertisement.</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    /*data() {
        return {
            showModal: true
        }
    },*/
    methods: {
        close() {
            this.$emit('close');
        }
    },
}
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 40%;
        height: 82%;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-body {
        margin: 20px 0;
    }

    .hideButton {
        margin-left: 28.5%;
        margin-bottom: 0.5%;
        border-radius: 50%;
        width: 28px;
        color: white;
        background-color: black;
        opacity: 0.7;
        border: none;
    }

    h1{
        text-align: center;
        position: absolute;
        margin-top: 30%;
    }

    @media screen and (width: 2560px) /*height 1440*/ {
        .modal-container {
            height: 73%;
        }

        h1 {
            font-size: 520%;
        }
    }

    @media screen and (min-width: 100px) {
        .modal-container {
            height: 40%;
            width: 80%;
        }
    }

    @media screen and (min-width: 600px){
        h1 {
            margin-top: 10%;
        }

        .modal-container {
            height: 40%;
            width: 60%;
        }
    }

    @media screen and (min-width: 1000px) {
        .modal-container {
            height: 60%;
            width: 50%;
        }
    }
/*
    @media screen and (width: 360px) and (height: 640px){
        .modal-container {
            width: 87%;
            height: 50%;
            padding-top: 2%;
        }
        .ad1 {
            width: 104%;
        }
    }

@media screen and (width: 360px) and (height: 780px){

    .modal-container {
        width: 40%;
        height: 80%;
        padding-top: 2%;
    }

}

@media screen and (min-width: 375px) and (max-width: 376px) and (height: 812px){
    .modal-container {
        width: 87%;
        height: 42%;
        padding-top: 2%;
    }
    .ad1 {
        width: 104%;
    }

}

@media screen and (width: 812px) and (height: 376px) {
    .modal-container {
        width: 40%;
        height: 76%;
        padding-top: 0.0013%;
        padding-left: 2%;
    }
    .ad1 {
        width: 104%;
    }
}

@media screen and (min-width: 414px) and (max-width: 416px) and (height: 896px){
    .modal-container {
        width: 87%;
        height: 42%;
        padding-top: 2%;
    }
    .ad1 {
        width: 104%;
    }
}
*/

</style>