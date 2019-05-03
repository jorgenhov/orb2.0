<template lang="html">
  <v-container class="orb-container" fluid>
    <v-layout row wrap>
      <v-flex xs3 xl2>
        <orb-selected-author></orb-selected-author>
        <orb-selected-category></orb-selected-category>
      </v-flex>
      <v-flex xs9 xl10>
        <orb-recipes-view></orb-recipes-view>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RecipesView from '../recipeView/RecipesView.vue'
import SelectCategory from '../recipeView/filters/SelectCategory.vue'
import SelectAuthor from '../recipeView/filters/SelectAuthor.vue'
import{ mapActions } from 'vuex';
export default {
  components: {
    orbRecipesView: RecipesView,
    orbSelectedCategory: SelectCategory,
    orbSelectedAuthor: SelectAuthor
  },
  methods: {
    ...mapActions([
      'getRecipesLength'
    ])
  },
  created: function() {
    this.getRecipesLength();
  }
}
</script>

<style lang="css" scoped>
.orb-clear-btn {
  float: left;
  margin-left: 5%;
  width: 200px;
}

.orb-container {
  padding-top: 0 !important;
}
</style>
