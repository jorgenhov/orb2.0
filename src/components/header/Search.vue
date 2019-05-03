<template lang="html">
  <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Søk etter opskrift"
      class="orb-search"
      v-model="searchTerm"
    ></v-text-field>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    ...mapActions([
      'getRecipesFromSearch',
      'clearRecipes',
      'getRecipesPaginate',
      'setSearchTerm'
    ])
  },
  computed: {
    ...mapGetters([
      'recipes'
    ])
  },
  watch: {
    searchTerm: function() {
      this.setSearchTerm(this.searchTerm);
      if(this.searchTerm != ''){
        this.clearRecipes('')
        this.getRecipesFromSearch(this.searchTerm)
      } else {
        this.clearRecipes('')
        let offset = this.recipes.length;
        this.getRecipesPaginate(offset)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.orb-search {
  margin-left: 2.4%;
  max-width: 400px;
}
</style>
