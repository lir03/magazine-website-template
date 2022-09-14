<template>
    <div class="container">
        <div class="row">
        <!--left side ad1-->
            <div class="col-md-3">
                <!--<left-ad-main />-->
            </div>

        <!--Article-->
            <div class="col-sm-12 col-md-6">
                <img class="article" alt="Section 2 Article 1" v-show="!isHidden" :src="require('@/assets/images/year/month/section-2/Placeholder-Articles-2.webp')">
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-xs-3 col-sm-6 col-md-6 buttons">
                        <router-link to="/s2-article-1-p1"><back-button></back-button></router-link>
                    </div>
                    <!--Show/Hide Article Text-->
                    <text-button class="textButton" @click="isHidden = !isHidden"></text-button>
                    <div class="text" v-show="isHidden">
                        <p>
                            finally lose those unwanted pounds.
                        </p>
                        <ol start=2>
                            <li>Antioxidant</li>
                            Those who are looking for ways to look younger could try spirulina. Its antioxidant properties will help your skin look supple and glowing and will make you look years younger. Those not looking for the fountain of youth can still benefit from its antioxidant properties as it will increase your resistance to pollution and other free radicals.
                            <li>Improves the Immune System</li>
                            Spirulina helps improve the immune system thus making you more resistant to illness and diseases. Taking this supplement everyday will help your immune system significantly improve. That means if you were sickly before and prone to getting illness then by taking this superfood, you will grow stronger and your body’s defenses against illness and disease will become tougher. Thus you will not be sick often anymore.
                            <li>Cleanses the body of toxins</li>
                            Everyday our body is exposed to different toxins. From the food we eat to the air we breathe. Taking spirulina once a day will cleanse your body of this toxins more effectively than drinking water as it will not only cleanse your body from the toxins of the food you ate but also from the air you breath. You will havea cleaner and healthier body in the long run if you take spirulina regularly.
                            <li>Anti-Cancer Properties</li>
                            Research have suggested that spirulina has anti-cancer properties. It has shown to be most effective on cancer of the mouth.
                            <li>Lowers Bad LDL and Triglyceride Levels</li>
                            Heart disease is the leading cause of death around the world. Taking spirulina can help prevent this as the supplement has been known to lower bad ldl cholesterol and triglycerides while raising good HDL cholesterol.
                            <li>Reduce Blood Pressure</li>
                            Blood pressure is a very tricky problem. One moment it’s down then at any moment it can spike up to dangerously high levels. Taking medicines is fine and dandy but there is a thing as too much medicines. Sometimes instead of helping, it can actually contribute to the problem. Taking spirulina is a healthier alternative and has been shown to significantly reduce blood pressure.
                            <li>Treatment Against Allergic Rhinitis</li>
                            Allergic Rhinitis can be quite bothersome as it makes it hard to breathe. Taking Spirulina greatly improves the symptoms of allergic rhinitis and give one a lot of relief.
                            <li>Effective Against Anemia</li>
                            Anemia is fairly common in people who always stay up late. They begin to have feelings of weakness and fatigue. Taking spirulina is a great way to combat this. According to a study, taking one spirulina per day greatly increased the hemoglobin content of red blood cells and improved immune function.
                            <li>Muscle Strength and Endurance</li>
                            Athletes would love spirulina as it greatly improves muscle strength and endurance. They will be able to perform more and not get tired easily.
                        </ol>
                        <p>
                            &emsp;Spirulina has a lot of benefits as well as just being super healthy. It can be a great addition to your herbal supplements and taking it has no side effect whatsoever. However, it contains iodine so those with iodine allergies should not take it. Even though more research is needed for it to make any strong claims, spirulina looks like it is worthy of the name superfood. If you want to add this to your herbal supplements, it is available in organic stores and drugstores both off and online.
                        </p>
                        <br><br>
                        <h6><strong>Emma Woodhouse</strong> is a clever, spirited, and happy person who loves making love matches between her friends that often lead to trouble. She loves debating with her dear friend Mr. Knightley.</h6>
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