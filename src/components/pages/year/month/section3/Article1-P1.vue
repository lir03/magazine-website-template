<template>
    <div class="container">
         <div class="row">
        <!--left side ad1-->
            <div class="col-md-3">
                <!--<left-ad-main />-->
            </div>

        <!--Article-->
            <div class="col-sm-12 col-md-6">
                <img class="article" alt="Section 3 Article 1" v-show="!isHidden" :src="require('@/assets/images/year/month/section-3/Placeholder-Articles-1.webp')">
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-xs-3 col-sm-6 col-md-6 buttons">
                        <router-link to="/s3-article-1-p2"><next-button></next-button></router-link>
                    </div>
                    <!--Show/Hide Article Text-->
                    <text-button class="textButton" @click="isHidden = !isHidden"></text-button>
                    <div class="text" v-show="isHidden">
                        <h1>The Good Fat</h1>
                        <h6>By | Josephine March<br>Page Design | Angelo Valeriano</h6>
                        <br>
                        <p>
                            &emsp;Come New Year, almost everyone makes resolutions that usually fall short. Of all the New Year’s resolutions being made, going on a diet is almost always at the top of the list. Unfortunately, many fall by the wayside half-way through this resolution. Chalk it up to being tempted by luscious, mouth-watering foods or to pure laziness but people almost always fall off the wagon when it comes to dieting. Fad diets do not help either as they just increase the food cravings and bring back the weight with a vengeance. So how do we address this issue? Luckily, there’s one diet that allows you to eat to your heart’s content and still let you lose weight. It even lets you eat fat – but not the kind of fat that walks on all fours and wallows in the mud. No, it is the good kind of fat in this diet known as the Keto Diet.
                            <br><br>
                            &emsp;The Keto or Ketogenesis Diet is also known as the low carb or low carb high fat diet. Simply put, you either stop eating carbs or lower your carbohydrate intake and eat more fats. How does this work? Well, when you eat more foods that are high in carbohydrates, your body will produce glucose and insulin. This glucose will be used as a primary source of energy so the fats will not be needed and is stored away. Leaving you with a body full of unused fat which makes for a chubby you. However, if you lower your intake of carbohydrates and increase your intake of fat, your body will be induced into a state known as ketosis. Ketosis is a natural process in the body that happens when the food intake is low. Ketosis is initiated to help the body survive. During this state, the body produces ketones which are produced from the breakdown of fats from the liver.
                            <br><br>
                            &emsp;The good kind of fat can truly help you lose weight by triggering ketosis. The right kind of fat actually helps you lose a lot of weight. Fats such as avocado, hard cheeses, high fat cream,
                        </p>
                    </div>
                </div>
            </div>

        <!--right side ad1-->
            <div class="col-md-3 rightad">
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
    position: relative;
    width: 100%;
    height: auto;
}

.buttons {
    margin-top: 4%;
}

.text {
    margin-top: 10%;
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

@media screen and (width: 2560px) /*height 1440*/ {
    .container {
        max-width: 2560px;
        min-height: 1800px;
    }
}

@media screen and (width: 360px) and (height: 640px){
    .textButton {
        margin-bottom: 15%;
    }

    .text {
        margin-top: 5%;
    }
}

@media screen and (width: 360px) and (height: 780px){
    .textButton {
        margin-bottom: 15%;
    }

    .text {
        margin-top: 5%;
    }
}

@media screen and (min-width: 375px) and (max-width: 376px) and (height: 812px){
    .textButton {
        margin-bottom: 15%;
    }

}

@media screen and (min-width: 414px) and (max-width: 416px) and (height: 896px){
    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (min-width: 601px) and (max-width: 605px) /*height 962*/ {
    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (min-width: 640px) and (max-width: 644px) /*height 360*/{
    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (min-width: 667px) and (max-width: 669px) /*height 375*/ {
    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (width: 768px) /*height 1024*/{
    .container{
        height: 883px;
    }

    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (min-width: 780px) and (max-width: 793px) and (height: 360px){
    .textButton {
        margin-bottom: 15%;
    }
}


@media screen and (width: 800px) /*height 1280*/{
    .container {
        height: 1155px;
    }

    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (width: 896px) /*414*/{
    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (min-width: 961px) and (max-width: 963px) /*height 601*/{
    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (width: 1024px) /*height 768*/{
    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (width: 1080px) {
    .textButton {
        margin-bottom: 5%;
    }
}

@media screen and (width: 1280px) and (height: 800px){
    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (width: 1280px) and (height: 720px){
    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (min-width: 1364px) and (max-width: 1368px) /*height 768*/{
    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (min-width: 1439px) and (max-width: 1441px) /*height 900*/{
    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (min-width: 1534px) and (max-width: 1537px) and (height: 864px){
    .textButton {
        margin-bottom: 15%;
    }
}

@media screen and (min-width: 1918px) and (max-width: 1922px) /*height 1080*/{
    .textButton {
        margin-bottom: 15%;
    }
}
 
</style>