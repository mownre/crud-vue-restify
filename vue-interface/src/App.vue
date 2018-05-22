<template>
  <div class="container container-fluid">
    <div class="row">

      <div class="col">
        <app-cadastro></app-cadastro>
      </div>
      <div class="col">
        <app-pessoas></app-pessoas>
      </div>
    </div>
  </div>
</template>

<script>
import Pessoas from './components/Pessoas.vue'
import Cadastro from './components/Cadastro.vue'
export default {
  components: {
    'app-pessoas': Pessoas,
    'app-cadastro': Cadastro
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
