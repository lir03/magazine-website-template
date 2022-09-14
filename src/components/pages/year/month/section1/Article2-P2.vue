<template>
    <div class="container">
        <div class="row">
        <!--left side ad1-->
            <div class="col-md-3">
                <!--<left-ad-main />-->
            </div>

        <!--Article-->
            <div class="col-sm-12 col-md-6">
                <img class="article" alt="Section 1 Article 2" v-show="!isHidden" :src="require('@/assets/images/year/month/section-1/Placeholder-Articles2-2.webp')">
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-xs-3 col-sm-6 col-md-6 buttons">
                        <router-link to="/s1-article-2-p1"><back-button></back-button></router-link>
                    </div>
                    <!--Show/Hide Article Text-->
                    <text-button class="textButton" @click="isHidden = !isHidden"></text-button>
                    <div class="text" v-show="isHidden">
                        <ol start=4>
                            because they help lift a person’s mood. Once a person’s mood is lifted they begin to be happier and work more since they do not have that much stress.
                            <li>Cleanliness</li>
                                &emsp;Buying new office furniture will make your office look cleaner and more uniform. It is a fact that when an office looks and feels clean, the employees are more relaxed and optimistic about their work ahead.
                        </ol>
                        <p>
                            &emsp;Another reason for bringing in new office furniture is the many benefits it brings to you and your company.
                        </p>
                        <ol>
                            <li>Freshen Up the Office</li>
                                &emsp;Bringing in new office furniture gives you the chance to freshen up an old, drab office space. Imagine how bright, shiny, and clean your office space will look like with new furniture. It will look more modern and up to date.
                            <li>Shows You’re in it for the Long Haul</li>
                                &emsp;Changing old furniture to new ones shows your customers that you’re sticking around, that you are not closing shop and that you have plans to grow.
                            <li>Employee Friendly</li>
                                &emsp;New furniture has a lot of new features that the old ones do not have. Like executive chairs, old executive chairs are rickety and are back breakers. New executive chairs have a number of new features such as comfortable armrests and lumbar support. Show your employees that you care for them by replacing their old executive chairs with new ones.
                        </ol>
                        <p>
                            &emsp;It’s always nice to buy new furniture. It not only gives you a chance to update the look of your office but also gives you the chance to take advantage of all the new features and technology that new furniture brings.
                        </p>
                        <br><br>
                        <h6><strong>Clary Fray</strong> loves seemingly arrogant boys but with a heart of gold with golden hair and ethereal blue eyes. She loves working out and training for battle and always looks out for her friends’ safety and happiness.</h6>
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