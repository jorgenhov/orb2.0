<template lang="html">
  <v-container class="orb-container" fluid>
    <v-layout v-if="" row wrap>
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
  data() {
    return {
      isSignedIn: false
    };
  },
  components: {
    orbRecipesView: RecipesView,
    orbSelectedCategory: SelectCategory,
    orbSelectedAuthor: SelectAuthor
  },
  methods: {
    ...mapActions([
      'getRecipesLength'
    ]),
    // checkIfLoggedIn() {
    //   if (localStorage.getItem('authtoken') !== '') {
    //
    //   }
    // }
  },
  created: function() {
    this.getRecipesLength();
    //this.checkIfLoggedIn();
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
