<template lang="html">
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 d-flex>
        <v-select
          :items="optionsAuthor"
          label="Velg bruker..."
          v-model="selectedAuthor"
        ></v-select>
        <v-icon
          v-if="selectedAuthor"
          class="orb-clear-filter"
          left
          size=22
          @click="clearFilter">
          clear
        </v-icon>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '../../../services/api'
import{ mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      optionsAuthor: [],
      selectedAuthor: ''
    }
  },
  created: function() {
    this.getAuthors()
  },
  methods: {
    getAuthors() {
      api.getAllUsers()
        .then(authors => {
          authors.map(authorObj => {
            let author = authorObj.user;
            this.optionsAuthor.push(author)
          })
        })
    },
    ...mapActions([
      'setSelectedAuthor',
      'getByAuthor',
      'getByCategory',
      'getByCategoryAndAuthor',
      'getRecipesPaginate',
      'clearRecipes'
    ]),
    clearFilter() {
      this.selectedAuthor = '';
      this.setSelectedAuthor('')
    }
  },
  computed: {
    ...mapGetters([
      'selectedCategoryStore',
      'recipes'
    ])
  },
  watch: {
    selectedAuthor: function() {
      this.setSelectedAuthor(this.selectedAuthor);
      if (this.selectedCategoryStore && this.selectedAuthor) {
        let filters = {
          author: this.selectedAuthor,
          category: this.selectedCategoryStore
        };
        this.getByCategoryAndAuthor(filters)
      } else if (this.selectedAuthor) {
        this.getByAuthor(this.selectedAuthor)
      } else if (this.selectedCategoryStore && !this.selectedAuthor) {
        this.getByCategory(this.selectedCategoryStore)
      } else {
        this.clearRecipes();
        let offset = this.recipes.length;
        this.getRecipesPaginate(offset);
      }
    }
  }
}
</script>

<style lang="css" scoped>
.orb-clear-filter:hover {
  cursor: pointer;
  color: rgb(133, 0, 0);
}
</style>
