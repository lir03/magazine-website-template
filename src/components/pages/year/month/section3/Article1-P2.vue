<template>
    <div class="container">
        <div class="row">
        <!--left side ad1-->
            <div class="col-md-3">
                <!--<left-ad-main />-->
            </div>

        <!--Article-->
            <div class="col-sm-12 col-md-6">
                <img class="article" alt="Section 3 Article 1" v-show="!isHidden" :src="require('@/assets/images/year/month/section-3/Placeholder-Articles-2.webp')">
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-xs-3 col-sm-6 col-md-6 buttons">
                        <router-link to="/s3-article-1-p1"><back-button></back-button></router-link>
                    </div>
                    <!--Show/Hide Article Text-->
                    <text-button class="textButton" @click="isHidden = !isHidden"></text-button>
                    <div class="text" v-show="isHidden">
                        <p>
                            butter, spinach, kale, broccoli, cauliflower, macadamias, walnuts, sunflower seeds, coconut oil, high-fat salad dressing, and saturated fats are all what dieticians call good fats. However, your diet should still be well-rounded so don't just eat the good fats exclusively. Your diet should be 70% fats, 25% protein, and 5% carbohydrate.
                            Aside from losing weight though, these good fats also offer benefits such as:
                        </p>
                            <ol>
                                <li>Mental Focus - Ketones are a good brain food. Big spikes in blood sugar are avoided when you lower your carbohydrate intake thus resulting in improved focus and concentration.</li>
                                <li>Increased Energy and Normalized Hunger - Research show that fats are more effective to be burned by the body as fuel. In giving your body a better fuel to burn throughout the day, you will feel more energized and alert.</li>
                            </ol>
                        <p>
                            &emsp;The Ketogenic Diet has a lot of promise to it so give it a try.
                        </p>
                        <br><br>
                        <h6><strong>Josephine March</strong> loves writing and reading books. You can always find her in the attic with her nose in a good book or trying to write the next great American novel. She is also always up for adventure with her sisters and best friend Laurie.</h6>
                    </div>
                </div>
            </div>
        <!--right side ad1-->
            <div class="col-md-3">
                <!--<right-ad-main />-->
            </div>
        </div>
    </div>
</template>

<script>
/*import LeftAdMain from '../../../ads/LifeUpgraded/LeftAdMain.vue';
import RightAdMain from '../../../ads/LifeUpgraded/RightAdMain.vue';*/

export default {
    
    /*components: {
        LeftAdMain,
        RightAdMain,
    },*/

    data() {
        return {
            isHidden: false
        }
    }

}

</script>

<style scoped>
.container {
    max-width: 1920px;
    min-height: 1150px;
}

.article {
    width: 100%;
    height: auto;
}

.buttons {
    margin-top: 4%;
}

.text {
    margin-top: 5%;
    font-family: garamond, serif;
    background-color: lightgray;
}

.textButton {
    margin-top: 0%;
    /*margin: 2px;*/
    width: 55%;
    align-content: center;
    -ms-transform: translate(41%, 50%);
  transform: translate(41%, 50%);
}

@media screen and (max-width: 2560px) {
    .container {
        max-width: 2560px;
    }
}

@media screen and (max-width: 360px) {
    .textButton {
        margin-bottom: 15%;
    }

    .text {
        margin-top: 5%;
    }
}

@media screen and (min-width: 375px) and (max-width: 480px) {
    .textButton {
        margin-bottom: 15%;
    }
    .text {
        padding-top: 10%;
    }
}

@media screen and (min-width: 640px) and (max-width: 668px) {
    .textButton {
        margin-bottom: 10%;
    }

    .text {
        padding-top: 5%;
    }
}

@media screen and (width: 1080px) {
    .textButton {
        margin-bottom: 5%;
    }
}

@media screen and (min-width: 1280px) and (max-width: 1800px) {
    .textButton {
        margin-bottom: 5%;
    }
    .text {
        padding-top: 2%;
    }
}

@media screen and (min-width: 768px) and (max-width: 835px) {
    .textButton {
        margin-bottom: 12%;
    }

    .text {
        padding-top: 10%;
    }
}

@media screen and (min-width: 911px) and (max-width: 1024px) {
    .textButton {
        margin-bottom: 5%;
    }
    .text {
        padding-top: 5%;
    }
}

</style>