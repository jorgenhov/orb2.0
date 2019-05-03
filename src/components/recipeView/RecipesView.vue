<template lang="html">
  <v-content class="orb-content">
    <orb-recipes></orb-recipes>
    <v-btn
      v-if="recipes.length < recipesLength && (!selectedAuthorStore && !selectedCategoryStore && !searchTermStore)"
      class="orb-load-more"
      flat
      @click="getPaginate()">
      Last mer...
    </v-btn>
  </v-content>
</template>

<script>
import Recipes from './Recipes.vue'
import{ mapGetters, mapActions } from 'vuex';
export default {
  components: {
    orbRecipes: Recipes
  },
  computed: {
    ...mapGetters([
      'recipesLength',
      'recipes',
      'selectedAuthorStore',
      'selectedCategoryStore',
      'searchTermStore'
    ])
  },
  methods: {
    ...mapActions([
      'getRecipesPaginate'
    ]),
    getPaginate() {
       let offset = this.recipes.length;
      this.getRecipesPaginate(offset);
     }
  }
}
</script>

<style lang="css" scoped>
.orb-content {
  padding-top: 0 !important;
}

.orb-load-more {
  left: 43%;
  transform: translateX(-43%);
}
</style>
