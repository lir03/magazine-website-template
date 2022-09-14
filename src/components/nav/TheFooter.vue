<template>
    <footer class="footer">
        <p>&copy; {{new Date().getFullYear()}}{{ footerText }}</p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            footerText: ' MaGeS Publishing House'
        }
    }
}
</script>

<style scoped>
p {
    font-size: 14px;
    margin-top: 30%;
    text-align: center;
}

@media screen and (width: 2560px) {
    p {
        font-size: 20px;
    }
}

</style>