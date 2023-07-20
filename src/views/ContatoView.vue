<template>
  <div>
    <div v-if="loading">
      <page-loading/>
    </div>
    <div v-if="api">
      <h1>Contato</h1>
      <p>API: {{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: 'ContatoView',
  mixins: [fetchData],
  components: {

  },
  created(){
    this.fetchData('/' + this.$route.name)
  }
}
</script>

<style>

</style>
