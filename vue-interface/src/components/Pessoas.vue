<template>
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>CPF</th>
                    <th>RG</th>
                    <th>Sexo</th>
                    <th>Excluir</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pessoa in pessoas" :key="pessoa.id">
                    <td>{{pessoa.id}}</td>
                    <td>{{pessoa.nome}}</td>
                    <td>{{pessoa.idade}}</td>
                    <td>{{pessoa.cpf}}</td>
                    <td>{{pessoa.rg}}</td>
                    <td>{{pessoa.sexo}}</td>
                    <td><form><button class="btn btn-outline-danger" v-on:click="deleteItem(pessoa.id)">&times;</button></form>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
export default {
  data() {
    return {
      pessoas: []
    };
  },
  
  methods: {
      deleteItem: function(pessoa_id) {
          this.$http.delete("http://localhost:3003/pessoa/deletar", {
              body: {
                  id: pessoa_id
              }
          }).then(res => {
              console.log(res);
          })
      }

  },
  
  created() {
    this.$http.get("http://localhost:3003/pessoa/listar").then(res => {
        this.pessoas = res.data.pessoas;
    });
  }

};
</script>

<style>
</style>
