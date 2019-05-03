<template>
  <v-app>
    <orb-header></orb-header>
    <v-content>
    <orb-home></orb-home>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/header/Header.vue'
import Home from './components/home/Home.vue'

export default {
  name: 'App',
  components: {
    orbHeader: Header,
    orbHome: Home
  },
  data () {
    return {
      //
    }
  },
}
</script>
