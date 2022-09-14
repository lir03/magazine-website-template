<template>

    <div class="container">
        <h1>Contact Us</h1>
        <div class="text-box">
        <h4>
            <span class="text-sub">Email: <a class="email" href="mailto:#">Magazine Email Address</a></span>
            <span class="text-sub">Facebook: <a class="facebook" href="www.facebook.com/" target="_blank">Magazine Title</a></span>
            <span class="text-sub">Twitter: <a class="twitter" href="www.twitter.com/" target="_blank">Magazine Twitter Handle</a></span>
            <span class="text-sub">Instagram: <a class="instagram" href="www.instagram.com/" target="_blank">Magazine Handle</a></span>
        </h4>
        </div>
        <!--<h4 class="row">Email: </h4><a class="email" href="mailto:#">Magazine Email Address</a>
        <h4 class="row2">Facebook: </h4><a class="facebook" href="www.facebook.com/" target="_blank">Magazine Title</a>
        <h4 class="row3">Twitter: </h4><a class="twitter" href="www.twitter.com/" target="_blank">@Magazine Twitter Handle</a>
        <h4 class="row3">Instagram: </h4><a class="instagram" href="www.Instagram.com/" target="_blank">Magazine Handle</a>-->
    </div>

</template>

<style scoped>
.container {
    background: rgb(247, 232, 232);
    padding-bottom: 30%;
}
h1 {
    padding-top: 5%;
    padding-bottom: 2%;
    text-align: center;
}

.text-box {
    position: absolute;
    top: 35%;
    left: 35%;
    transform: translate (-50%, -50%);
    width: 50%;
}

.text-sub {
    display: block;
}

.email {
    padding-left: 15%;
}

.facebook {
    padding-left: 9.7%;
}

.twitter {
    padding-left: 13.3%;
}

.instagram {
    padding-left: 9.3%;
}

/*
.email {
    float: right;
    margin-right: 34%;
}
.facebook {
    float: right;
    margin-right: 40.2%;
}
.twitter{
    float: right;
    margin-right: 32.3%;
}
.instagram {
    float: right;
    margin-right: 38.4%;
}

.row {
    float: left;
    margin-left: 38%;
}

.row2 {
    float: left;
    margin-top: 2%;
    margin-left: -4.7%;
}

.row3 {
    float: left;
    margin-top: 2%;
    margin-left: -9%;
}
*/

</style>