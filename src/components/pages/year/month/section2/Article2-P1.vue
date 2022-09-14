<template>
    <div class="container">
         <div class="row">
        <!--left side ad1-->
            <div class="col-md-3">
                <!--<left-ad-main />-->
            </div>

        <!--Article-->
            <div class="col-sm-12 col-md-6">
                <img class="article" alt="Section 2 Article 2" v-show="!isHidden" :src="require('@/assets/images/year/month/section-2/Placeholder-Articles2-1.webp')">

                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-xs-3 col-sm-6 col-md-6 buttons">
                        <!-- <router-link to="/s1-article-2-p2"><next-button></next-button></router-link> -->
                    </div>
                    <!--Show/Hide Article Text-->
                    <text-button class="textButton" @click="isHidden = !isHidden"></text-button>
                    <div class="text" v-show="isHidden">
                        <h4>The Best Kind of Pet</h4>
                        <h6>By | Elizabeth Bennet<br>Page Design | Angelo Valeriano</h6>
                        <br>
                        <p>
                            &emsp;The best cure for a lonely heart is having a pet. Having a pet can bring a lot of joy to anyone albeit it also brings in a lot of responsibility. Ultimately, it's not just about getting some random pet you find cute, it's more about finding the right pet that suits you.
                        </p>
                        <ul>
                            <li>Dogs</li>
                                &emsp;Having a dog can be a lot of fun. But you have to think about the breed of dog you are going to get because every breed has their own personality and level of upkeep, like how much exercise they are going to need. However, having a dog is like having a friend for life. They will always be there for you, are available 24/7 for hugs and kisses, and will basically worship the ground you walk on. They are always happy to see and be with you.
                            <li>Cats</li>
                                &emsp;Cats have their own little world where you can sometimes take part in but most of the time you are just an observer. Cats are a great pet for people who are very independent. Cats can be sweet and loveable if they want to be but most of the time they are happy to just sit by the corner where the sun is shining down.
                            <li>Birds</li>
                                &emsp;Birds don't require that much taking care of. They just sit on their cage, sing, and do acrobatics the whole day, or if you have a parrot or a budgie, keep repeating words the whole day. Birds are fun if you want a pet that does not require that much responsibility. They are nice to look at and can be wonderful companions.
                        </ul>
                        <p>   
                            &emsp;The kind of pet you will eventually end up getting will mostly depend on your personality and the lifestyle you lead. You will also have to think about the level of upkeep a certain pet will need and if you are able to follow through with that.
                        </p>
                        <br><br>
                        <h6><strong>Elizabeth Bennet</strong> is highly opinionated and loves to read. She doesn't particularly like going to parties but still goes for her sisters and mother. Her society pressures her to marry for money but she would rather marry for love.</h6>
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