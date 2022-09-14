<template>
  <div class="container">
    <input class="bar" v-model="keyword" placeholder="search" />
    <div class="row">
      <div class="box col-sm-12 col-md-6">
        <div class="image" v-for=" (f, index) of filterImages" :key="index">  
          <router-link :to="'/' + f.path" @click="scrollToTop()"><img class="prev" :src="f.url" /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const images = [
    {
        url: require("@/assets/images/year/month/teasers/Regular Teaser-1.webp"),
        description: "section 1 have a laugh anne shirleyt the best medicine down gloomy",
        path: "s1-article-1-p1",
    },
    {
        url: require("@/assets/images/year/month/teasers/Regular Teaser-4.webp"),
        description: "section 1 out with the old clary fray office space efficiency and productivity",
        path: "s1-article-2-p1",
    },
    {
        url: require("@/assets/images/year/month/teasers/Regular Teaser-6.webp"),
        description: "section 2 10 benefits of spirulina emma woodhouse healthy eating",
        path: "s2-article-1-p1",
    },
    {
        url: require("@/assets/images/year/month/teasers/Regular Teaser-5.webp"),
        description: "section 2 the best kind of pet elizabeth bennet best cure for a lonely heart dogs cats birds",
        path: "s2-article-2-p1",
    },
    {
        url: require("@/assets/images/year/month/teasers/Regular Teaser-2.webp"),
        description: "section 3 the good fat josephine march keto diet eating healthy",
        path: "s3-article-1-p1",
    },
    {
        url: require("@/assets/images/year/month/teasers/Regular Teaser-3.webp"),
        description: "section 4 long distance love mary lennox ldr long distance relationships ",
        path: "s4-article-1-p1",
    },
]

export default {
    data() {
    return { keyword: "", images };
  },
  computed: {
    filterImages() {
      const { images, keyword } = this;
      return images.filter(({ description }) => description.includes(keyword.toLowerCase()));
    },
  },
  methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
};
</script>

<style scoped>
.container {
    max-width: 100%;
    min-height: 702px;
    height: auto;
}

.bar {
    margin-top: 2%;
    margin-left: 43.6%;
    margin-right: auto;
    margin-bottom: 2%;
    overflow: inherit;
}

.box {
    margin-left: 24.8%;
}

.image {
    width: 50%;
    float: left;
    padding: 2px;
    /*border: 2px solid red;*/
    
}

.prev {
    width: 100%;
    margin-bottom: 2%;
    padding-left: 2%;
    
}

@media screen and (width: 2560px) {
  .container {
    margin-left: 0%;
  }

  .bar {
    margin-left: 46.5%;
  }
}

@media screen and (max-width: 1366px) {
  .container {
    padding-left: 10%;
    
  }
}

@media screen and (max-width: 1440px) {
  .container {
    min-height: 849px;
  }
}

@media screen and (max-width: 700px) {
  .bar {
    margin-left: 28.5%;
  }
  .box {
    margin-left: 2%;
  }
  .image {
    width: 85%;
  }
}

@media screen and (width: 1024px) {
  .container {
    margin-left: 4%;
  }
}

@media screen and (width: 360px) {
  .container {
    margin-left: 0%;
  }
  .bar{
    margin-left: 15%;
  }
  .box {
    margin-left: 0%;
  }
  .image {
    width: 88%;
  }
}

</style>