<template>
    <div class="container">
        <div class="row">
        <!--left side ad1-->
            <div class="col-md-3">
                <!--<left-ad-main />-->
            </div>

        <!--Article-->
            <div class="col-sm-12 col-md-6">
                <img class="article" alt="Sectio 1 Article 1" v-show="!isHidden" :src="require('@/assets/images/year/month/section-1/Placeholder-Articles-2.webp')">
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-xs-3 col-sm-6 col-md-6 buttons">
                        <router-link to="/s1-article-1-p1"><back-button></back-button></router-link>
                    </div>
                    <!--Show/Hide Article Text-->
                    <text-button class="textButton" @click="isHidden = !isHidden"></text-button>
                    <div class="text" v-show="isHidden">
                        <h3>Fleabag</h3>
                        <p>
                            &emsp;This is a hilarious show about balancing family, friends, job interviews, and keeping a guinea pig-themed café afloat. Chaotic at best but it all ties up nicely in the end.
                        </p>
                        <h3>Rosehaven</h3>
                        <p>
                            &emsp;This comedy show is about two odd-couple real estate agents trying to go through everyday life. It has countless laugh-out-loud moments but similar to numerous great comedies, there is a sense of sadness and longing at its core.
                        </p>
                        <h3>Double Denim adventure Show</h3>
                        <p>
                            &emsp;A comedy about a couple of teenagers going through their teen years to avo days.
                            <br><br>
                            &emsp;The best comedy shows in Melbourne, Australia are a joy to watch and a wonder to behold. They relax us and generally make us forget about the stress of the day. So grab that remote, tune in to your favorite comedy show, and let all your worries melt away.
                        </p>
                        <br><br>
                        <h6><strong>Anne Shirley</strong> loves Octobers and believes that imagination makes life wonderful. She is in constant search for a bosom buddy and always tries to look for the silver lining but tries to be ready for that bend in the road.</h6>
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