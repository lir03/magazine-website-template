<template>
    <div class="container">
         <div class="row">
        <!--left side ad1-->
            <div class="col-md-3">
                <!--<left-ad-main />-->
            </div>

        <!--Article-->
            <div class="col-sm-12 col-md-6">
                <img class="article" alt="Section 1 Article 1" v-show="!isHidden" :src="require('@/assets/images/year/month/section-1/Placeholder-Articles-1.webp')">

                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-xs-3 col-sm-6 col-md-6 buttons">
                        <router-link to="/s1-article-1-p2"><next-button /></router-link>
                    </div>
                    <!--Show/Hide Article Text-->
                    <text-button class="textButton" @click="isHidden = !isHidden"></text-button>
                    <div class="text" v-show="isHidden">
                        <h1>Have a Laugh</h1>
                        <h6>By | Anne Shirley<br>Page Design | Angelo Valeriano</h6>
                        <br>
                        <p>
                            &emsp;Cliché as it may sound, laughter is truly the best medicine. Ask anyone and they’ll tell you they always feel better every time they watched a good comedy show and have had a good laugh. 
                            <br><br>
                            &emsp;Laughter is universal and it unites people of any race. The best comedy shows in Melbourne, Australia have found a great audience and the people just can’t get enough of them. Comedians such as Carl Barron, Joel Creasey, Kitty Flanagan, and Anne Edmonds have found loyal following by making people laugh and chuckle. Want to find some good comedy shows? Some best comedy shows in Melbourne, Australia come to mind. Have a cuppa, sit back, and relax and see if these shows have what it takes to bring out some giggles.
                            <br><br>
                            &emsp;Ronnie Chieng: International Student
                            <br><br>
                            &emsp;Remember your days as a college student? Well if you’re into reminiscing the good old days and want to have a laugh while at it, watch this comedy show. Follow Ronnie Chieng across his university as n international student. Watch him walk through the path of learning and laugh with him as he fumbles his way around campus right to your heart.
                            </p>
                            <h3>&emsp;Get Krack!n</h3>
                            <p>
                            &emsp;This is a satire show that targets early morning breakfast television. Exchanging between lighthearted mockery and gallows humour, this show is an outrageously funny treat.

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