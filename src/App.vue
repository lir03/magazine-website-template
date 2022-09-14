<template>
<!--snow animation for winter-->
  <div v-if = "active2" class="snowflakes" aria-hidden="true">
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
  <div class="snowflake">
  ❅
  </div>
  <div class="snowflake">
  ❆
  </div>
  <div class="snowflake">
  ❄
  </div>
</div>
<!--end of snow animation-->

<!--heart animation for february issues-->
<div v-if = "active1" class="hearts" aria-hidden="true">
  <div class="heart">
    &hearts;
  </div>
  <div class="heart">
    &hearts;
  </div>
  <div class="heart">
    &hearts;
  </div>
  <div class="heart">
    &hearts;
  </div>
  <div class="heart">
    &hearts;
  </div>
  <div class="heart">
    &hearts;
  </div>
  <div class="heart">
    &hearts;
  </div>
  <div class="heart">
    &hearts;
  </div>
  <div class="heart">
    &hearts;
  </div>
  <div class="heart">
    &hearts;
  </div>
</div>
<!--end of heart animation-->

<div v-if = "active3" class="pumpkins" aria-hidden="true">
  <div class="pumpkin">
    &#127875;
  </div>
  <div class="pumpkin">
    &#129415;
  </div>
  <div class="pumpkin">
    &#127875;
  </div>
  <div class="pumpkin">
    &#129415;
  </div>
  <div class="pumpkin">
    &#127875;
  </div>
  <div class="pumpkin">
    &#129415;
  </div>
  <div class="pumpkin">
    &#127875;
  </div>
  <div class="pumpkin">
    &#129415;
  </div>
  <div class="pumpkin">
    &#127875;
  </div>
  <div class="pumpkin">
    &#129415;
  </div>
</div>

  <!--Banner Advertisment Location-->
  <banner-ad />
  <!--Navigation Bar Location-->
  <the-navigation class="nav" v-if="!$route.meta.hideNavbar" />
  <main class="main">
    <router-view></router-view>

  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';
import BannerAd from './components/pages/ads/Banner/BannerAd.vue';

export default {

  components: {
    TheNavigation,
    BannerAd,
  },

  data() {
    var date = new Date();
    var month = date.getMonth();

    if (month=='1'){
      return{
        active1: true
      } 
    }else if (month=='11'){
      return{
        active2: true
      }
    }else if (month=='9'){
      return{active3: true}
    }
    return month;
  },
  
};
</script>

<style>
.main {
  background-color: #adf7f6;
  /*Christmas Background*/
  /*background-image: linear-gradient(to right, red, green);*/
  /*background-image: linear-gradient(to top, rgb(238, 156, 224), red);*/
  max-width: 1920px;
  min-height: 800px;
}

/*snow animation for winter issues*/
.snowflake {
  color: #fff;
  font-size: 2em;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
  z-index: 1;
}

@-webkit-keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes snowflakes-shake{0%{-webkit-transform:translateX(0px);transform:translateX(0px)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}100%{-webkit-transform:translateX(0px);transform:translateX(0px)}}@keyframes snowflakes-fall{0%{top:-10%}100%{top:100%}}@keyframes snowflakes-shake{0%{transform:translateX(0px)}50%{transform:translateX(80px)}100%{transform:translateX(0px)}}.snowflake{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:snowflakes-fall,snowflakes-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:snowflakes-fall,snowflakes-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.snowflake:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.snowflake:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.snowflake:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.snowflake:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.snowflake:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.snowflake:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.snowflake:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.snowflake:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.snowflake:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.snowflake:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}

/*heart animation for february issue*/
.heart {
  color: rgb(241, 71, 233);
  font-size: 3em;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
  z-index: 1;
}

@-webkit-keyframes hearts-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes hearts-shake{0%{-webkit-transform:translateX(0px);transform:translateX(0px)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}100%{-webkit-transform:translateX(0px);transform:translateX(0px)}}@keyframes hearts-fall{0%{top:-10%}100%{top:100%}}@keyframes hearts-shake{0%{transform:translateX(0px)}50%{transform:translateX(80px)}100%{transform:translateX(0px)}}.heart{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:hearts-fall,hearts-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:hearts-fall,hearts-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.heart:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.heart:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.heart:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.heart:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.heart:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.heart:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.heart:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.heart:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.heart:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.heart:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}

/* jack o'lantern animation for october issue*/
.pumpkin {
  font-size: 2em;
  font-family: Arial;
  text-shadow: 0 0 1px #000;
  z-index: 1;
}

@-webkit-keyframes pumpkins-fall{0%{top:-10%}100%{top:100%}}@-webkit-keyframes pumpkins-shake{0%{-webkit-transform:translateX(0px);transform:translateX(0px)}50%{-webkit-transform:translateX(80px);transform:translateX(80px)}100%{-webkit-transform:translateX(0px);transform:translateX(0px)}}@keyframes pumpkins-fall{0%{top:-10%}100%{top:100%}}@keyframes pumpkins-shake{0%{transform:translateX(0px)}50%{transform:translateX(80px)}100%{transform:translateX(0px)}}.pumpkin{position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;-webkit-animation-name:pumpkins-fall,pumpkins-shake;-webkit-animation-duration:10s,3s;-webkit-animation-timing-function:linear,ease-in-out;-webkit-animation-iteration-count:infinite,infinite;-webkit-animation-play-state:running,running;animation-name:pumpkins-fall,pumpkins-shake;animation-duration:10s,3s;animation-timing-function:linear,ease-in-out;animation-iteration-count:infinite,infinite;animation-play-state:running,running}.pumpkin:nth-of-type(0){left:1%;-webkit-animation-delay:0s,0s;animation-delay:0s,0s}.pumpkin:nth-of-type(1){left:10%;-webkit-animation-delay:1s,1s;animation-delay:1s,1s}.pumpkin:nth-of-type(2){left:20%;-webkit-animation-delay:6s,.5s;animation-delay:6s,.5s}.pumpkin:nth-of-type(3){left:30%;-webkit-animation-delay:4s,2s;animation-delay:4s,2s}.pumpkin:nth-of-type(4){left:40%;-webkit-animation-delay:2s,2s;animation-delay:2s,2s}.pumpkin:nth-of-type(5){left:50%;-webkit-animation-delay:8s,3s;animation-delay:8s,3s}.pumpkin:nth-of-type(6){left:60%;-webkit-animation-delay:6s,2s;animation-delay:6s,2s}.pumpkin:nth-of-type(7){left:70%;-webkit-animation-delay:2.5s,1s;animation-delay:2.5s,1s}.pumpkin:nth-of-type(8){left:80%;-webkit-animation-delay:1s,0s;animation-delay:1s,0s}.pumpkin:nth-of-type(9){left:90%;-webkit-animation-delay:3s,1.5s;animation-delay:3s,1.5s}

p, li{
  color: black;
  font-family: garamond, serif;
  font-size: 115%;
}

h4, h6 {
  color: black;
  font-family: garamond, serif;
}

ol, ul {
    color: black;
}

@media screen and (max-width: 2560px){
  .main {
    max-width: 2560px;
    height: auto;
  }
}

@media screen and (width: 3840px) {
  .main {
    max-width: 3840px;
  }
}
</style>
