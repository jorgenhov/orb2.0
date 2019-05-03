<template lang="html">
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <h5 class="font-weight-thin orb-read-more" v-on="on">Les mer...</h5>
      </template>
      <v-card>
        <v-toolbar class="orb-dialog-bar">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title class="orb-dialog-title subheading">{{recipe.title}}</v-toolbar-title>
        </v-toolbar>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 class="orb-recipe">
              <v-img :src=recipe.thumbnailImage aspect-ratio="1.9778" contain></v-img>
              <h1 class="font-weight-thin display-3 text-xs-center mt-4">{{ recipe.title }}</h1>
              <p  class="text-xs-center">Lagt til: {{ createdAtTrim }} &nbsp; | &nbsp; Av: {{ recipe.author }} &nbsp; | &nbsp; Kategori: {{ recipe.category }}</p>
              <v-divider class="mt-4"></v-divider>
            </v-flex>
            <v-flex xs12 md4>
              <orb-list-ing :ingredients="recipe.ingredients"></orb-list-ing>
            </v-flex>
            <v-flex xs12 md8>
              <orb-list-instruc :instructions="recipe.instructions"></orb-list-instruc>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import ListIng from './ListIng.vue'
import ListInstruc from './ListInstruc.vue'
export default {
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  },
  props: {
    recipe: Object
  },
  components: {
    orbListIng: ListIng,
    orbListInstruc: ListInstruc
  },
  computed: {
    createdAtTrim: function() {
      return this.recipe.createdAt.substring(0, 10);
    }
  }
}
</script>

<style lang="css" scoped>
.orb-read-more {
  font-size: 105%;
}

.orb-read-more:hover {
  cursor: pointer;
  font-weight: normal !important;
}

.orb-dialog-bar{
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#3fbbcc+0,ccf9ff+100 */
  background: #3fbbcc !important; /* Old browsers */
  background: -moz-linear-gradient(-45deg, #3fbbcc 0%, #ccf9ff 100%) !important; /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, #3fbbcc 0%,#ccf9ff 100%) !important; /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, #3fbbcc 0%,#ccf9ff 100%) !important; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3fbbcc', endColorstr='#ccf9ff',GradientType=1 ) !important; /* IE6-9 fallback on horizontal gradient */
}

.orb-dialog-title {
  color: white;
}

.orb-recipe {

}

img {
  min-width: 100%;
  max-height: 600px;
  object-fit: cover;
}

</style>
