import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    recipes: [],
    recipesLog: [],
    filteredRecipes: [],
    optionsCategory: [],
    optionsUser: [],
    selectedCategory: '',
    selectedAuthor: '',
    searchTerm: '',
    recipesLength: 0,
    isStagedRecipesSearched: false,
    title: '',
    thumbnailImage: null,
    selectedCategoryNew: '',
    selectedUserNew: '',
    instructionsInputs: [],
    ingredientInputs: [],
  },
  getters,
  mutations,
  actions,
});
