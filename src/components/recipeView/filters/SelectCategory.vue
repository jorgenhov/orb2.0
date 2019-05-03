<template lang="html">
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 d-flex>
        <v-select
          :items="optionsCategory"
          label="Velg kategori..."
          v-model="selectedCategory"
        ></v-select>
        <v-icon
          v-if="selectedCategory"
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
      optionsCategory: [],
      selectedCategory: ''
    }
  },
  created: function() {
    this.getCategories()
  },
  methods: {
    getCategories() {
      api.getAllCategories()
        .then(categories => {
          categories.map(categoryObj => {
            let category = categoryObj.category;
            this.optionsCategory.push(category)
          })
        })
    },
    ...mapActions([
      'setSelectedCategory',
      'getByCategory',
      'getByAuthor',
      'getByCategoryAndAuthor',
      'getRecipesPaginate',
      'clearRecipes'
    ]),
    clearFilter() {
      this.selectedCategory = '';
      this.setSelectedCategory('');
    }
  },
  computed: {
    ...mapGetters([
      'selectedAuthorStore',
      'recipes'
    ])
  },
  watch: {
    selectedCategory: function() {
      this.setSelectedCategory(this.selectedCategory);
      if (this.selectedAuthorStore && this.selectedCategory) {
        let filters = {
          category: this.selectedCategory,
          author: this.selectedAuthorStore
        };
        this.getByCategoryAndAuthor(filters)
      } else if (this.selectedCategory) {
        this.getByCategory(this.selectedCategory)
      } else if (this.selectedAuthorStore && !this.selectedCategory) {
        this.getByAuthor(this.selectedAuthorStore)
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
