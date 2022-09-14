<template>
    <div class="container">
         <div class="row">
        <!--left side ad1-->
            <div class="col-md-3">
                <!--<left-ad-main />-->
            </div>

        <!--Article-->
            <div class="col-sm-12 col-md-6">
                <img class="article" alt="Section 4 Article 1" v-show="!isHidden" :src="require('@/assets/images/year/month/section-4/Placeholder-Articles-1.webp')">
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-xs-3 col-sm-6 col-md-6 buttons">
                        <router-link to="/s4-article-1-p2"><next-button></next-button></router-link>
                    </div>
                    <!--Show/Hide Article Text-->
                    <text-button class="textButton" @click="isHidden = !isHidden"></text-button>
                    <div class="text" v-show="isHidden">
                        <h1>Long Distance Love</h1>
                        <h6>By | Mary Lennox<br>Page Design | Angelo Valeriano</h6>
                        <br>
                        <p>
                            &emsp;Ah, love! Many a poet has written about its wonders and many a writer have marveled at its beauty. It is both a joy and a complexity, entangling you in its web even before you know you have been snared. Many people have tried to understand the essence of it and have failed. Love is meant to be felt not understood. Just the mere touch of your partner, just the mere look, is enough to give you butterflies in your stomach. But what if your partner is thousands of miles away from you?
                            <br><br>
                            &emsp;Yes, long-distance love. In this day and age of emails, video calls, and chats, falling in love with someone who lives on the other side of the world is a possibility. However, with your partner being away from you, it is quite difficult to make the relationship last. It takes two strong people to give a long-distance relationship a try, it is not for the faint of heart.
                        </p>
                            <h3>Ways to Make a Long-Distance Relationship Stronger</h3>
                            <ol>
                                <li>Invest in a good computer and keyboard</li>
                                &emsp;Being in a long-distance relationship means talking to your loved one only through chats, video call, or emails. Naturally, you would want to invest in a good computer that does not lag or turn off in the middle of your chat. Also, buy a good keyboard. You are going to be chatting (if not video calling) for a long period of time so it is better if you have a reliable keyboard. An ergonomic keyboard is better than the flat ones as it will relax your hands and wrist, thus avoiding any carpal injury.
                                <li>Communicate</li>
                                &emsp;In any relationship, communication is important. What more in a long-distance relationship where communication is the core of the relationship? It is vital that you and your partner communicate regularly. If you are busy, schedule a time when you can talk even for just 30 minutes a day. Don’t take your partner for
                            </ol>
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