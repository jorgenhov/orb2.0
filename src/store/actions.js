import api from '../services/api'

// For filters

export const setSelectedCategory = ({commit}, category) => {
  commit('setSelectedCategory', category);
};

export const setSelectedAuthor = ({commit}, author) => {
  commit('setSelectedAuthor', author);
};

export const clearRecipes = ({commit}) => {
  commit('clearRecipes');
};

export const setSearchTerm = ({commit}, searchTerm) => {
  commit('setSearchTerm', searchTerm);
};

//Getters for recipes

export const getRecipesLength = ({commit}) => {
  api.getAllRecipesLength()
    .then(length => {
      commit('getRecipesLength', length);
    })
};

export const getAllUsers = ({commit}) => {
  api.getAllUsers()
    .then(users => {
      commit('setAllUsers', users);
    })
};

export const getAllCategories = ({commit}) => {
  api.getAllCategories()
    .then(categories => {
      commit('setAllCategories', categories);
    })
};

export const getRecipesPaginate = ({commit}, offset) => {
  return api.getPaginateRecipes(offset)
    .then(recipes => {
      commit('getRecipesPaginate', recipes);
    })
};

export const getByAuthor = ({commit}, author) => {
  api.getAllRecipesByAuthor(author)
    .then(recipes => {
      commit('mutateRecipesByAuthorOrCategoryOrSearch', recipes);
    })
};

export const getByCategory = ({commit}, category) => {
  api.getAllRecipesByCategory(category)
    .then(recipes => {
      commit('mutateRecipesByAuthorOrCategoryOrSearch', recipes);
    })
};

export const getByCategoryAndAuthor = ({commit}, filters) => {
  api.getAllRecipesByCategoryAndAuthor(filters.category, filters.author)
    .then(recipes => {
      commit('mutateRecipesByAuthorOrCategoryOrSearch', recipes);
    })
};

export const getRecipesFromSearchAndAuthorAndCategory = ({commit}, searchTerm, author, category) => {
  api.getRecipesFromSearchAndAuthorAndCategory(searchTerm, author, category)
    .then(recipes => {
      commit('mutateRecipesByAuthorOrCategoryOrSearch', recipes);
    })
};

export const getRecipesFromSearchAndAuthor = ({commit}, searchTerm, author) => {
  api.getRecipesFromSearchAndAuthor(searchTerm, author)
    .then(recipes => {
      commit('mutateRecipesByAuthorOrCategoryOrSearch', recipes);
    })
};

export const getRecipesFromSearchAndCategory = ({commit}, searchTerm, category) => {
  api.getRecipesFromSearchAndCategory(searchTerm, category)
    .then(recipes => {
      commit('mutateRecipesByAuthorOrCategoryOrSearch', recipes);
    })
};

export const getRecipesFromSearch = ({commit}, searchTerm) => {
  api.getRecipesFromSearch(searchTerm)
    .then(recipes => {
      commit('mutateRecipesByAuthorOrCategoryOrSearch', recipes);
    })
};

//For adding a recipe

export const setTitle = ({commit}, title) => {
  commit('setTitle', title);
};

export const setThumbnalImage = ({commit}, thumbnailImage) => {
  commit('setThumbnalImage', thumbnailImage);
};

export const setCategory = ({commit}, category) => {
  commit('setCategory', category);
};

export const setAuthor = ({commit}, author) => {
  commit('setAuthor', author);
};

export const setInstructions = ({commit}, instructions) => {
  //let instructionsArray = instructions.map(instruction => instruction.value)
  commit('setInstructions', instructions);
};

export const setIngredients = ({commit}, ingredients) => {
  //let instructionsArray = instructions.map(instruction => instruction.value)
  commit('setIngredients', ingredients);
};
