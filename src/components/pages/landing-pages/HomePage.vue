<template>

    <div class="container">
        <pop-up-ad v-show="showModal" @close="closeModal" />    

        <div class="row">
        <!--left side ad1-->
            <div class="col-md-3">
                <left-main-ad />
            </div>


        <!--main body-->
        <div class="col-sm-12 col-md-6">
            <img class="cover" alt="cover" :src="require('@/assets/images/home/cover.webp')">
            <div class="row top"></div>
            <div class="row">
                <div class="col-7 fst">
                    <router-link @click="scrollToTop()" to='/s1-article-1-p1'><img class="blurb1" alt="Section 1 Article 1" :src="require('@/assets/images/home/blurb1.webp')"></router-link>
                    <router-link @click="scrollToTop()" to='/s2-article-1-p1'><img class="blurb2" alt="Emotionally Speaking" :src="require('@/assets/images/home/blurb2.webp')"></router-link>
                </div>
                <div class="col-5 sec">
                    <div class="row sep"></div>
                    <div class="row b3">
                        <router-link @click="scrollToTop()" to='/s3-article-1-p1'><img class="blurb3" alt="Danger Zone" :src="require('@/assets/images/home/blurb3.webp')"></router-link>
                    </div>
                    <div class="row b4">
                        <router-link @click="scrollToTop()" to='/s4-article-1-p1'><img class="blurb4" alt="Puning Toxicity Levels" :src="require('@/assets/images/home/blurb4.webp')"></router-link>
                    </div>
                    <div class="row b5">
                        <router-link @click="scrollToTop()" to='/s1-article-2-p1'><img class="blurb5" alt="To Drive or Not to Drive" :src="require('@/assets/images/home/blurb5.webp')"></router-link>
                    </div>
                    <div class="row b6">
                        <router-link @click="scrollToTop()" to='/s2-article-2-p1'><img class="blurb6" alt="When Words Fail" :src="require('@/assets/images/home/blurb6.webp')"></router-link>
                    </div>
                </div>
            </div>
       </div>

        <!--right side ad1-->
            <div class="col-md-3">
                <right-main-ad />
            </div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-sm-12 col-md-6 footer">
                <the-footer />
            </div>
        </div>
        
    </div>
    
</template>

<script>
import LeftMainAd from '../ads/Home/LeftAdMain.vue';
import RightMainAd from '../ads/Home/RightMainAd.vue';
import TheFooter from '../../nav/TheFooter.vue';
import PopUpAd from '../ads/Home/PopUpAd.vue';
/*eslint-disable*/
export default {
    
    name: 'container',

    components: {
        LeftMainAd,
        RightMainAd,
        TheFooter,
        PopUpAd,
    },

    data() {
        return {
            showModal: true,
        };
    },

    methods: {
        closeModal() {
            this.showModal = false;
        },
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

.cover {
    position: absolute;
    display: inline;
    width: 49%;
    height: auto;
}

.top {
    height: 25%;
}

.sec {
    padding-left: 15%;
}

.sep {
    height: 15%;
}

.blurb1 {
    position: relative;
    margin-left: 7%;
    width: 85%;
    z-index: 2;
}

.blurb2 {
    position: relative;
    margin-top: 7%;
    margin-left: 7%;
    width: 30%;
    z-index: 2;
}

.blurb3 {
    position: relative;
    margin-left: 13%;
    width: 70%;
    z-index: 2;
}

.blurb4 {
    position: relative;
    margin-left: 5%;
    width: 78%;
    z-index: 2;
}

.blurb5 {
    position: relative;
    margin-left: 13%;
    width: 70%;
    z-index: 2;
}

.blurb6 {
    position: relative;
    margin-left: 5%;
    width: 78%;
    z-index: 2;
}

.b3 {
    height: 9%;
}
.b4 {
    height: 10%;
}
.b5 {
    height: 10%;
}
.b6 {
    height: 7%;
}

.footer {
    font-size: 10px;
    margin-top: 8%;
    text-align: center;
}

.private {
    color: black;
}

a:hover {
  color: silver;
}

@media screen and (width: 3840px) {
    .b3, .b4, .b5, .b6 {
        width: 95%;
        height: 9%;
    }
  
}

@media screen and (width: 2048px) {
    .b3, .b4, .b5, .b6 {
        width: 105%;
    }
}

@media screen and (width: 1920px) {
    .b3, .b4, .b5, .b6 {
        width: 105%;
    }
}

@media screen and (max-width: 400px) {
    .cover {
        width: 93%;
    }

    .top {
        height: 32%;
    }

    .footer {
        margin-top: 15%;
    }

    .rightad {
        margin-top: 10%;
    }

    .b3, .b4, .b5, .b6 {
        width:120%;
    }

}

@media screen and (min-width: 412px) and (max-width: 479px) {

    .cover {
        width: 93%;
    }

    .sep {
        height: 22%;
    }

    .b3, .b4, .b5, .b6 {
        width:110%;
    }
}

@media screen and (width: 480px) {
    .cover {
        width: 95%;
    }

    .sep {
        height: 22%;
    }

    .b3, .b4, .b5, .b6 {
        width:112%;
        height: 10%;
    }
    
}

@media screen and (min-width: 533px) and (max-width: 568px) {
    .cover {
        width: 95%;
    }

    .sep {
        height: 22%;
    }

    .b3, .b4, .b5, .b6 {
        width:108%;
        height: 10%;
    }

}

@media screen and (min-width: 600px) and (max-width: 753px) {
    .cover {
        width: 96%;
    }

    .sep {
        height: 22%;
    }

    .b3, .b4, .b5, .b6 {
        width:108%;
        height: 10%;
    }
}

@media screen and (min-width: 768px) and (max-width: 799px) {
    .fst {
        width: 62%;
    }
    .sec {
        width: 38%;
    }
    .b3 {
        width:140%;
        height: 8%;
    }

    .b4, .b5, .b6 {
        width:140%;
        height: 10%;
    }
}

@media screen and (min-width: 800px) and (max-width: 854px) {
    .fst {
        width: 62%;
    }
    .sec {
        width: 38%;
    }
    
    .sep {
        height: 12%;
    }

    .b3, .b4, .b5, .b6 {
        width:140%;
        height: 10%;
    }
}

@media screen and (width: 896px) {
    .fst {
        width: 60%;
    }
    .sec {
        width: 40%;
    }
    
    .sep {
        height: 12%;
    }

    .b3, .b4, .b5, .b6 {
        width:130%;
        height: 10%;
    }
}

@media screen and (min-width: 900px) and (max-width: 910px) {
    .fst {
        width: 60%;
    }
    .sec {
        width: 40%;
    }
    
    .sep {
        height: 12%;
    }

    .b3, .b4, .b5, .b6 {
        width:130%;
        height: 11%;
    }
}

@media screen and (min-width: 911px) and (max-width: 1026px) {
    .fst {
        width: 60%;
    }
    .sec {
        width: 40%;
    }
    
    .sep {
        height: 12%;
    }

    .b3, .b4, .b5, .b6 {
        width:130%;
        height: 11%;
    }
}

@media screen and (width: 1366px) and (max-width: 1400px){
    img.cover {
        width: 49%;
    }

}

@media screen and (width: 2400px) {
    .b3, .b4, .b5, .b6 {
        width:100%;
        height: 9%;
    }
}

/*Firefox CSS*/

@-moz-document url-prefix() {
    /*
    .blurb3 {
        margin-left: -51%;
    }
    .blurb4 {
        margin-left: -51%;
    }
    .blurb5 {
        margin-left: -51%;
    }
    .blurb6 {
        margin-left: -51%;
    }*/

 /*   @media screen and (min-width: 414px) and (max-width: 480px) {
        img.blurb3 {
            margin-left: -30%;
        }
        img.blurb4 {
            margin-left: -12%;
        }
        img.blurb5 {
            margin-left: 3%;
        }
        img.blurb6 {
            margin-left: 2%;
        }
    }

    @media screen and (max-width: 400px) {
        img.blurb3 {
            margin-left: -30%;
        }
        img.blurb4 {
            margin-left: -12%;
        }
        img.blurb5 {
            margin-left: 3%;
        }
        img.blurb6 {
            margin-left: 2%;
        }
        img.blurb7Mobile {
            margin-left: 5%;
        }
    }

    @media screen and (width: 601px) {
        img.blurb3 {
            margin-left: -30%;
        }
        img.blurb4 {
            margin-left: -12%;
        }
        img.blurb5 {
            margin-left: 3%;
        }
        img.blurb6 {
            margin-left: 2%;
        }
        img.blurb7Mobile {
            margin-left: 5%;
        }
    }

    @media screen and (min-width: 640px) and (max-width: 668px) {
        .rightad {
            margin-top: 15%;
        }

        img.blurb3 {
            margin-left: -30%;
        }
        img.blurb4 {
            margin-left: -12%;
        }
        img.blurb5 {
            margin-left: 3%;
        }
        img.blurb6 {
            margin-left: 2%;
        }
        img.blurb7Mobile {
            margin-left: 5%;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 834px) {
        img.blurb3 {
            margin-left: -30%;
        }
        img.blurb4 {
            margin-left: -12%;
        }
        img.blurb5 {
            margin-left: 3%;
        }
        img.blurb6 {
            margin-left: 5%;
        }
        img.blurb7Mobile {
            margin-left: 5%;
        }
    }

    @media screen and (width: 896px) {
        img.blurb3 {
            margin-left: -30%;
        }
        img.blurb4 {
            margin-left: -11.5%;
        }
        img.blurb5 {
            margin-left: 4%;
        }
        img.blurb6 {
            margin-left: 4%;
        }
    }

        @media screen and (min-width: 911px) and (max-width: 1024px) {
        img.blurb3 {
            margin-left: -30%;
        }
        img.blurb4 {
            margin-left: -11.5%;
        }
        img.blurb5 {
            margin-left: 4%;
        }
        img.blurb6 {
            margin-left: 4%;
        }
    }

    @media screen and (width: 1280px) {
        img.blurb3 {
            margin-left: -30%;
        }
        img.blurb4 {
            margin-left: -12%;
        }
        img.blurb5 {
            margin-left: 3%;
        }
        img.blurb6 {
            margin-left: 4%;
        }
    }

    @media screen and (width: 1366px) {
        .blurb3 {
            margin-top: 58%;
            margin-left: -51%;
            width: 21%;
        }
        .blurb4 {
            margin-top: 74%;
           margin-left: -51%;
            width: 24%;
        }
        .blurb5 {
            margin-top: 89%;
            margin-left: -51%;
            width: 27%;
        }
        .blurb6 {
            margin-top: 104%;
            margin-left: -51%;
            width: 27%;
        }
    }

    @media screen and (width: 1440px) {
        .blurb3 {
            margin-left: -29%;
        }
        .blurb4 {
            margin-left: -12.5%;
        }
        .blurb5 {
            margin-left: 2.5%;
        }
    }

    @media screen and (width: 1536px) {
        .blurb3 {
            margin-left: -29%;
        }
        .blurb4 {
            margin-left: -12.5%;
        }
        .blurb5 {
            margin-left: 2.5%;
        }
    }

    @media screen and (width: 2400px) {
        .blurb3 {
            margin-left: -29%;
        }
        .blurb4 {
            margin-left: -12.5%;
        }
        .blurb5 {
            margin-left: 2.5%;
        }
    }
  
    @media screen and (width: 2560px) {
        .blurb3 {
            margin-left: -29%;
        }
        .blurb4 {
            margin-left: -12.5%;
        }
        .blurb5 {
            margin-left: 2.5%;
        }
    }
*/
}

</style>