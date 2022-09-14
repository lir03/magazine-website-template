<template>
    <footer class="button">
        <button @click="scrollToTop()" class="btn btn-lg btn-primary text">Image not loading? <strong>Click here</strong> to see the text only view below.<br><i class="fas fa-chevron-down" /></button>
    </footer>
</template>

<script>

export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
}
</script>

<style scoped>
.button {
    display: inline-block;
    margin-top: 2%;
    position: relative;
    /*left: 50%;*/
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-decoration: none;
}

.text {
    border: 0;
  border-radius: 20px;
  background-color: rgb(17, 209, 17);
  padding: 10px 20px;
}

</style>