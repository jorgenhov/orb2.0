<template lang="html">
  <v-layout row justify-center>
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ on }">
        <h5 class="font-weight-regular orb-read-more" v-on="on">Ny opskrift</h5>
      </template>
      <v-card>
        <v-toolbar class="orb-dialog-bar">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title class="orb-dialog-title subheading">Legg til ny opskrift</v-toolbar-title>
        </v-toolbar>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <orb-add-form></orb-add-form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>

import AddForm from './AddForm.vue'
export default {
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  },
  components: {
    orbAddForm: AddForm
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
