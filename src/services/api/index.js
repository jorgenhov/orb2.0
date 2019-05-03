import getAllRecipes from './RecipeGetAll'
import getAllRecipesByAuthor from './RecipeGetByAuthor'
import getAllRecipesByCategory from './RecipeGetByCategory'
import getAllRecipesByCategoryAndAuthor from './RecipeGetByCategoryAndAuthor'
import createRecipe from './RecipeCreate'
import getPaginateRecipes from './RecipeGetPaginate'
import getAllRecipesLength from './RecipeGetToalLength'
import getRecipesFromSearch from './RecipeSearch'
import getRecipesFromSearchAndAuthor from './RecipeGetSearchAndAuthor'
import getRecipesFromSearchAndCategory from './RecipeGetSearchAndCategory'
import getRecipesFromSearchAndAuthorAndCategory from './RecipeGetSearchAndAuthorAndCategory'
import getAllCategories from './GetCategories'
import getAllUsers from './GetUsers'

export default {
  getAllRecipes,
  getAllRecipesByAuthor,
  getAllRecipesByCategory,
  getAllRecipesByCategoryAndAuthor,
  createRecipe,
  getPaginateRecipes,
  getAllRecipesLength,
  getRecipesFromSearch,
  getRecipesFromSearchAndAuthor,
  getRecipesFromSearchAndCategory,
  getRecipesFromSearchAndAuthorAndCategory,
  getAllCategories,
  getAllUsers
}
