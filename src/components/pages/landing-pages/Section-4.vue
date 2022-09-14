<template>
    <div class="container">
        <div class="row">
        <!--left side ad1-->
            <div class="col-md-3">
                <left-ad-main />
            </div>

        <!--articles-->
        <div class="col-sm-12 col-md-6" id="feature">
            <router-link @click="scrollToTop()" to='/s4-article-1-p1'><img class="current" alt="Section 4 Article 1" :src="require('@/assets/images/year/month/teasers/Main Teaser-3.webp')"></router-link>
            <div>
                <router-link @click="scrollToTop()" to='/s2-article-1-p1'><img class="prev1" alt="Section 4 Article 2" :src="require('@/assets/images/year/month/teasers/Regular Teaser-6.webp')"></router-link>

                <router-link @click="scrollToTop()" to='/s1-article-1-p1'><img class="prev2" alt="Section 4 Article 3" :src="require('@/assets/images/year/month/teasers/Regular Teaser-1.webp')"></router-link>

                <router-link @click="scrollToTop()" to='/s1-article-2-p1'><img class="prev1" alt="Section 4 Article 4" :src="require('@/assets/images/year/month/teasers/Regular Teaser-4.webp')"></router-link>

                <router-link @click="scrollToTop()" to='/s3-article-1-p1'><img class="prev2" alt="Section 4 Article 5" :src="require('@/assets/images/year/month/teasers/Regular Teaser-2.webp')"></router-link>

            </div>
        </div>
        
        <!--right side ad1-->
            <div class="col-md-3">
                <right-ad-main />
            </div>
        </div>
    </div>
</template>

<script>
import LeftAdMain from '../ads/Section4/LeftAdMain.vue';
import RightAdMain from '../ads/Section4/RightMainAd.vue';

export default {
    
    components: {
        LeftAdMain,
        RightAdMain,
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 100%;
}

.current {
    padding-top: 2%;
    padding-bottom: 1.5%;
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 1px lightgrey solid;
}

.prev1 {
    padding: 2% 1% 1.5% 0%;
    display:inline;
    width: 45%;
}

.prev2 {
    padding: 1.9% 0% 0% 1%;
    float: right;
    display:inline;
    width: 45%;
}

</style>