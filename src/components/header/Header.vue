<template lang="html">
  <v-toolbar class="orb-navbar" dark fixed app>
    <v-toolbar-title class="orb-header-title">ORB</v-toolbar-title>
    <v-btn flat class="orb-header-link"><orb-add-recipe></orb-add-recipe></v-btn>
    <orb-search></orb-search>
  </v-toolbar>
</template>

<script>
import Search from './Search.vue'
import AddRecipe from '../addRecipe/AddRecipe.vue'
export default {
  components: {
    orbSearch: Search,
    orbAddRecipe: AddRecipe
  }
}
</script>

<style lang="css" scoped>
.orb-navbar{
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#3fbbcc+0,ccf9ff+100 */
  background: #3fbbcc !important; /* Old browsers */
  background: -moz-linear-gradient(-45deg, #3fbbcc 0%, #ccf9ff 100%) !important; /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, #3fbbcc 0%,#ccf9ff 100%) !important; /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, #3fbbcc 0%,#ccf9ff 100%) !important; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3fbbcc', endColorstr='#ccf9ff',GradientType=1 ) !important; /* IE6-9 fallback on horizontal gradient */
}

.orb-header-title {
  width: 60px;
  margin-left: 2%;
}

.orb-header-link {
  margin-left: 2%;
}

</style>
