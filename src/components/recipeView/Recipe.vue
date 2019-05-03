<template lang="html">
  <div class="">
    <figure class="recipe-card mb-3">
      <img class="img-size" :class="{hideit: loading}" v-show="!loading" :src=recipe.thumbnailImage  v-on:load="onLoaded" alt="sample1"/>
      <img class="img-size" v-if="loading" src="../../assets/loading.gif" alt="sample1"/>
    	<div class="icons">
        <i><orb-recipe-info :recipe="recipe" class="orb-read-more"></orb-recipe-info></i>
        <!-- <router-link :to="{ name: 'recipe', params: {recipe} }"><a><i class="ion-ios-play-outline">Les mer</i></a></router-link> -->
    	</div>
    	<figcaption>
    		<h2><span>{{ recipe.title }}</span></h2>
    		<p>If cake lasted forever, would we appreciate how tasty it is? | <span class="font-italic">{{ recipe.author }}</span></p>
    	</figcaption>
    </figure>
  </div>
</template>

<script>
import RecipeInfo from './RecipeInfo.vue'
export default {
  props: {
    recipe: Object
  },
  data() {
    return {
      loading: true
    }
  },
  methods: {
    onLoaded() {
      this.loading = false;
    }
  },
  components: {
    orbRecipeInfo: RecipeInfo
  }
}
</script>

<style lang="css" scoped>
img {
  object-fit: cover;
}

.hideit {
  display: none;
}

.img-wrapper {
  float: right;
}

.img-size {
  max-height: 200px;
  min-height: 200px;
  max-width: 200px;
  min-width: 200px;
}

.fadeimg-enter-active {
  transition: opacity 0.8s;
}

.fadeimg-enter-to {
  opacity: 1;
}

.fadeimg-enter {
  opacity: 0;
}

@import url(https://fonts.googleapis.com/css?family=Raleway:400,200,300,800);
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
figure.recipe-card {
  font-family: 'Raleway', Arial, sans-serif;
  position: relative;
  float: left;
  overflow: hidden;
  min-width: 200px;
  max-width: 400px;
  max-height: 200px;
  width: 100%;
  background: rgb(0, 155, 176);
}
figure.recipe-card * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
figure.recipe-card > img {
  margin-left: 50%;
  opacity: 1;
  width: 50%;
  filter: blur(0px);
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}
figure.recipe-card figcaption {
  left: 0;
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  background: #ffffff;
}
figure.recipe-card figcaption h2,
figure.recipe-card figcaption p {
  margin: 0;
  color: #000000;
  text-align: right;
  position: absolute;
  padding: 10px 0 10px 0px;
  margin: 0 40px 0 20px;
}
figure.recipe-card figcaption h2 {
  font-size: 1.3em;
  bottom: 50%;
  right: 0;
  font-weight: 300;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
figure.recipe-card figcaption h2 span {
  font-weight: 800;
}
figure.recipe-card figcaption p {
  top: 50%;
  font-size: 0.9em;
  opacity: 0.8;
}
figure.recipe-card .icons {
  padding: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  padding-left: 30px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
figure.recipe-card .icons i {
  font-size: 28px;
  padding: 10px;
  color: #ffffff;
  opacity: 0;
  top: 50%;
  display: inline-block;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  -webkit-transform: translateX(50px);
  transform: translateX(50px);
}
figure.recipe-card .icons a:first-child i {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
figure.recipe-card .icons a:nth-child(2) i {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
figure.recipe-card .icons a:nth-child(3) i {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
figure.recipe-card:after {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 35px;
  width: 35px;
  background-color: rgb(0, 113, 128);
  content: '';
  -webkit-transform: rotate(45deg) translate(-50%, -50%);
  transform: rotate(45deg) translate(-50%, -50%);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
figure.recipe-card:hover > img,
figure.recipe-card.hover > img {
  opacity: 0.5;
  filter: blur(5px);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
figure.recipe-card:hover i,
figure.recipe-card.hover i {
  opacity: 0.8;
  -webkit-transform: translate(0);
  transform: translate(0);
}
figure.recipe-card:hover a:first-child i,
figure.recipe-card.hover a:first-child i {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}
figure.recipe-card:hover a:nth-child(2) i,
figure.recipe-card.hover a:nth-child(2) i {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
figure.recipe-card:hover a:nth-child(3) i,
figure.recipe-card.hover a:nth-child(3) i {
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}
</style>
