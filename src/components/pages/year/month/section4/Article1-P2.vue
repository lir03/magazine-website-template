<template>
    <div class="container">
        <div class="row">
        <!--left side ad1-->
            <div class="col-md-3">
                <!--<left-ad-main />-->
            </div>

        <!--Article-->
            <div class="col-sm-12 col-md-6">
                <img class="article" alt="Section 4 Article 1" v-show="!isHidden" :src="require('@/assets/images/year/month/section-4/Placeholder-Articles-2.webp')">
                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-xs-3 col-sm-6 col-md-6 buttons">
                        <router-link to="/s4-article-1-p1"><back-button></back-button></router-link>
                    </div>
                    <!--Show/Hide Article Text-->
                    <text-button class="textButton" @click="isHidden = !isHidden"></text-button>
                    <div class="text" v-show="isHidden">
                        <ol start=3>
                            granted by not talking with them for long periods of time. Communicating with them is the only way you will be able to learn more about them and what is going on with their life.
                            <li>Serenade</li>
                            &emsp;Everyone loves music so why not serenade your partner while you are video calling? Grab your keyboard or your guitar and strum a tune. It does not matter if you can sing or not, what matters is you are singing them a song that is from your heart. Compose a song that is just for them and sing it to them. They will feel very much loved.
                            <li>Gifts</li>
                            &emsp;You don’t have to wait until birthday, Christmas, or your anniversary to give your loved one a gift. Be spontaneous. If you see something that reminds you of them or something that you just want them to have, then get it and send it to them. It could be something as trivial as summer bed sheets or as romantic as a dozen red roses. They will be very happy that you remembered them even if there is no special occasion.
                            <li>Trust</li>
                            &emsp;You are far away from your partner so you have no idea what they are doing every single day of their life. That’s when trust comes in. The trust between the two of you has to be so strong that it can withstand anything. You have to trust in your partner that even if they are far from you, they are doing everything they can for your future and so that the distance between the two of you will someday be filled.
                            <li>Honesty</li>
                            &emsp;In everything you do or say, be honest with your loved one. Do not hide anything from them or worse, lie. Lies are like pests that destroy a house. Lies will gnaw on your relationship and start rotting it until one day it will fester, boil, and die.
                            <li>Faithful</li>
                            &emsp;There’s a lot of temptation everywhere, especially if you have many close friends of the opposite sex. It is very easy to be tempted and engage in something that you will regret later on. Be faithful to your partner and bask in the love that you share. Know that if you cheat on your partner then you are also cheating on yourself. You are cheating yourself out of a loving relationship.
                        </ol>
                        <p>
                            &emsp;Falling in love is a magical experience even if the one you fall in love with is on the other side of the world. Enjoy the love that you share and keep in mind that you have to always be there for your partner, to support them and lift them up. Be strong for each other and the love you have will always be burning.
                        </p>
                        <br><br>
                        <h6><strong>Mary Lennox</strong> may seem shy at the beginning but she’s a very sweet girl who loves gardens, her cousin and boys who can talk to animals. She believes in the magi of the garden and spends her time in it whenever she can.</h6>
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