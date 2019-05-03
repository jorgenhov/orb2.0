<template lang="html">
  <div class="ml-5">
    <p class="ml-3 mt-4 display-1 font-weight-light">Instruksjoner</p>
    <v-divider class="mt-4 mb-3"></v-divider>
    <div class="">
      <ul v-for="(instruction, index) in instructions">
        <li><p class="subheading"><span class="font-weight-bold">{{index + 1}}.</span> {{instruction}}</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    instructions: Array
  }
}
</script>

<style lang="css" scoped>
li {
  list-style: none;
}
</style>
