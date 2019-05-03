<template lang="html">
  <v-layout row>
      <v-flex xs12>
          <v-list subheader>
            <p class="ml-3 mt-4 display-1 font-weight-light">Ingredienser</p>
            <v-divider class="mt-4"></v-divider>
            <div v-for="ingredient in ingredients">
              <v-list-tile class="mb-1 mt-1">
                <v-list-tile-content>
                  <v-list-tile-title><p class="title font-weight-light">{{ ingredient.ingredient }}</p></v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <kbd class="mr-2">{{ ingredient.amount }}</kbd>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider></v-divider>
            </div>
          </v-list>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  props: {
    ingredients: Array
  }
}
</script>

<style lang="css" scoped>
.orb-amount {
  float: right !important;
}
</style>
