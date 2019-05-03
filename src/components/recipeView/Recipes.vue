<template lang="html">
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 xl4
          v-for="recipe in recipes"
          v-bind:key="recipe.id">
          <orb-recipe :recipe="recipe"></orb-recipe>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import{ mapGetters, mapActions } from 'vuex';
import Recipe from './Recipe.vue'
export default {
  components: {
    orbRecipe: Recipe
  },
  methods: {
    ...mapActions([
      'getRecipesPaginate',
    ])
  },
  created: function() {
    let offset = this.recipes.length;
    this.getRecipesPaginate(offset);
  },
  computed: {
    ...mapGetters([
      'recipes',
    ])
  }
}
</script>

<style lang="css" scoped>
</style>
