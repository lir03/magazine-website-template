<template>
    <div class="container">
         <div class="row">
        <!--left side ad1-->
            <div class="col-md-3">
                <!--<left-ad-main />-->
            </div>

        <!--Article-->
            <div class="col-sm-12 col-md-6">
                <img class="article" alt="Section 1 Article 2" v-show="!isHidden" :src="require('@/assets/images/year/month/section-1/Placeholder-Articles2-1.webp')">

                <div class="row">
                    <div class="col-sm-3"></div>
                    <div class="col-xs-3 col-sm-6 col-md-6 buttons">
                        <router-link to="/s1-article-2-p2"><next-button></next-button></router-link>
                    </div>
                    <!--Show/Hide Article Text-->
                    <text-button class="textButton" @click="isHidden = !isHidden"></text-button>
                    <div class="text" v-show="isHidden">
                        <h4>Out with the Old</h4>
                        <h6>By | Clary Fray<br>Page Design | Angelo Valeriano</h6>
                        <br>
                        <p>
                            &emsp;Redecorating an old office is fun. From picking out the color schemes to choosing new office furniture, there is always something to look forward to. Aside from redecorating an old office, it’s also nice to decorate a new office. It’s a blank canvass and it can go any way you choose. Picking a theme, selecting a color, deciding on the wallpaper, and buying new office furniture is always an enjoyable moment. Also, when your business is expanding, you will need new office furniture to add to your ever-growing establishment. Add a few desks there, put a few more plants in the corner, and buy some new executive chairs to brighten up the room and make it look a little bit bigger. There are a lot of reasons aside from the ones already mentioned as to why you need new office furniture. For one it increases productivity.
                        </p>
                        <ol>
                            <li>Old, boring furniture will make you lazy</li>
                                &emsp;Drab office furniture will make an employee not want to work and will often lead to irritation and clumsiness what with all the paperwork mounting on their desk. Working with old furniture discourages work as the employee finds it tiresome to work in old furniture because it is dull and it dulls the senses. Replacing old office furniture with new furniture will liven up the space and brighten up the senses.
                            <li>Divide the Office</li>
                                &emsp;Bringing in new office furniture will help divide the office into two spaces, the professional one where all the work is done and the personal space where the employee can do whatever they want during their break time. When you bring in new office furniture, you will be able to see the layout of the office and understand how to divide the office. Also, it will strike a balance between an employee’s working hours and personal hours thus making them more productive.
                            <li>Lively Colors Equals Enthusiasm</li>
                                &emsp;A number of offices are now choosing to decorate their office in lively, brilliant colors

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