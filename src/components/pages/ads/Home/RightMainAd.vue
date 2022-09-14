<template>
    <div class="ads" v-show="isHidden">
        <button class="hideButton" @click="isHidden = !isHidden">X</button>
        <a href='#' target='_blank'><img  class="ad1" alt="Unmasked" :src="require('@/assets/images/ads/Ad1.jpg')"></a>
        <a href='#' target='_blank'><img  class="ad2" alt="Flute" :src="require('@/assets/images/ads/Ad2.jpg')"></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isHidden: true
        }
    },
}
</script>

<style scoped>
.ad1 {
    float: right;
    width: 100%;
    margin-top: 1.5%;
    margin-bottom: 1.5%;

}

.ad2 {
    float: right;
    width: 100%;
    margin-top: 1.5%;
    margin-bottom: 1.5%;
}

.ads {
    padding-top: 1%;
}

.hideButton {
    float: right;
    border-radius: 50%;
    width: 28px;
    color: white;
    background-color: black;
    opacity: 0.7;
    border: none;
}

@media screen and (min-width: 360px) and (max-width: 767px) {
    .ads {
        margin-top: 45%;
    }
}

@media screen and (max-width: 767.5px) {
    .ad2 {
        width: 48%;
        float: right;
    }
    .ad1 {
        width: 48%;
        float: left;
    }
}

@media screen and (min-width: 768px) and (max-width: 780px) {
    .ad1 {
        width: 170px;
    }
}

@media screen and (width: 800px) {
    .ad1 {
        width: 190px;
    }
}

@media screen and (width: 812px) {
    .ad1 {
        width: 190px;
    }
}

@media screen and (min-width: 896px) and (max-width: 901px) {
    .ad1 {
        width: 200px;
    }
}

@media screen and (width: 962px) {
    .ad1 {
        width: 220px;
    }
}

@media screen and (width: 1024px) {
    .ad1 {
        width: 240px;
    }
}

@media screen and (width: 1280px) {
    .ad1 {
        width: 300px;
    }
}

@media screen and (width: 2560px) {
    .ad1 {
        width: 600px;
    }
}

@media screen and (width: 1920px) {
    .ad1 {
        width: 450px;
    }
}

@media screen and (width: 1536px) {
    .ad1 {
        width: 350px;
    }
}


</style>