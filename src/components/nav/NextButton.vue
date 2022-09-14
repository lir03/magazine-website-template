<template>
    <footer class="button">
        <button type="button" @click="scrollToTop()" class=" btn btn-lg btn-primary next"><strong>Next</strong>&emsp;<i class="fas fa-chevron-right" /></button>
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
    margin-right: .5%;
    position: relative;
    margin-top: 1%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-decoration: none;
}

.next {
    border: 0;
  border-radius: 20px;
  background-color: rgb(17, 209, 17);
  padding: 10px 20px;
}

</style>