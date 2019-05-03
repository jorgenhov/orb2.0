//For filters

export const setSelectedCategory = (state, category) => {
  state.selectedCategory = category;
}

export const setSelectedAuthor = (state, author) => {
  state.selectedAuthor = author;
}

export const clearRecipes = (state) => {
  state.recipes = [];
}

export const setSearchTerm = (state, searchTerm) => {
  state.searchTerm = searchTerm;
}

// For api recipe Getters

export const getRecipesLength = (state, length) => {
  state.recipesLength = length;
};

export const setAllUsers = (state, users) => {
  users.map(userObj => {
   let user = userObj.user;
   state.optionsUser.push(user)
  })
};

export const setAllCategories = (state, categories) => {
  categories.map(categoryObj => {
   let category = categoryObj.category;
   state.optionsCategory.push(category)
  })
};

export const getRecipesPaginate = (state, recipes) => {
  recipes.map(recipe => state.recipes.push(recipe));
};

export const mutateRecipesByAuthorOrCategoryOrSearch = (state, recipes) => {
  state.recipes = recipes;
};

// For adding a recipe

export const setTitle = (state, title) => {
  state.title = title;
};

export const setThumbnalImage = (state, thumbnailImage) => {
  state.thumbnailImage = thumbnailImage;
};

export const setCategory = (state, category) => {
  state.selectedCategoryNew = category;
};

export const setAuthor = (state, author) => {
  state.selectedUserNew = author;
};

export const setInstructions = (state, instructions) => {
  state.instructionsInputs = instructions;
};

export const setIngredients = (state, ingredients) => {
  state.ingredientInputs = ingredients;
};
