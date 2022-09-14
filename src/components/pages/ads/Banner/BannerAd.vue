<template>
    <!--Home Page-->
    <div class="banner1" v-if="isHome">
        <a href='#' target='_blank'><img class="ad1" alt="Ad" :src="require('@/assets/images/ads/Banner Ad1.jpg')"></a>
    </div>

    <!--Section1-->
    <div class="banner2" v-if="isSection1 || isS1Article1P1 || isS1Article1P2">
        <a href='#' target='_blank'><img class="ad2" alt="Ad" :src="require('@/assets/images/ads/Banner Ad1.jpg')"></a>
    </div>

    <!--Section2-->
    <div class="banner3" v-if="isSection2 || isS2Article1P1 || isS2Article1P2">
        <a href='#' target='_blank'><img class="ad3" alt="Ad" :src="require('@/assets/images/ads/Banner Ad1.jpg')"></a>
    </div>

    <!--Section3-->
    <div class="banner4" v-if="isSection3 || isS3Article1P1 || isS3Article1P2">
        <a href='#' target='_blank'><img class="ad4" alt="Ad" :src="require('@/assets/images/ads/Banner Ad1.jpg')"></a>
    </div>

    <!--Section4-->
    <div class="banner5" v-if="isSection4 || isS4Article1P1 || isS4Article1P2">
        <a href='#' target='_blank'><img class="ad5" alt="Ad" :src="require('@/assets/images/ads/Banner Ad1.jpg')"></a>
    </div>
</template>

<script>
export default {
    computed: {
        //Banner Ad for Home Page
        isHome() {
            return this.$route.name === 'Home'
        },

        //Banner Ad for Secion1
        isSection1() {
            return this.$route.name === 'Section1'
        },

        //Banner Ad for Section1 Articles
        isS1Article1P1() {
            return this.$route.name === 'S1Article1P1'
        },
        isS1Article1P2() {
            return this.$route.name === 'S1Article1P2'
        },

        //Banner Ad for Secion2
        isSection2() {
            return this.$route.name === 'Section2'
        },

        //Banner Ad for Section2 Articles
        isS2Article1P1() {
            return this.$route.name === 'S2Article1P1'
        },
        isS2Article1P2() {
            return this.$route.name === 'S2Article1P2'
        },

        //Banner Ad for Secion3
        isSection3() {
            return this.$route.name === 'Section3'
        },

        //Banner Ad for Section3 Articles
        isS3Article1P1() {
            return this.$route.name === 'S3Article1P1'
        },
        isS3Article1P2() {
            return this.$route.name === 'S3Article1P2'
        },

        //Banner Ad for Secion4
        isSection4() {
            return this.$route.name === 'Section4'
        },

        //Banner Ad for Section4 Articles
        isS4Article1P1() {
            return this.$route.name === 'S4Article1P1'
        },
        isS4Article1P2() {
            return this.$route.name === 'S4Article1P2'
        }
    }
}
</script>

<style scoped>
.banner1 {
    background-color: black;
}

.banner2 {
    background-color: green;
}

.banner3 {
    background-color: blue;
}

.banner4 {
    background-color: yellow;
}

.banner5 {
    background-color: violet;
}

.ad1 {
    width: 90%;
    padding-left: 10%;
}

.ad2 {
    width: 90%;
    padding-left: 10%;
}

.ad3 {
    width: 90%;
    padding-left: 10%;
}

.ad4 {
    width: 90%;
    padding-left: 10%;
}

.ad5 {
    width: 90%;
    padding-left: 10%;
}

@media screen and (max-width: 768px) {
    .ad1 {
        width: 100%;
        padding-left: 0%;
    }

    .ad2 {
        width: 100%;
        padding-left: 0%;
    }

    .ad3 {
        width: 100%;
        padding-left: 0%;
    }

    .ad4 {
        width: 100%;
        padding-left: 0%;
    }

    .ad5 {
       width: 100%;
       padding-left: 0%;
    }
}

</style>