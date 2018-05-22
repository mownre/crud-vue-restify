<template>
    <div class="row justify-content-center">

            <div class="jumbotron"> 
                <h5 class="display-4">Cadastro de usuários</h5>
                <br>
                <form>
                    <div class="form-group">
                        <label for="nome">Nome: </label>
                        <input type="text" class="form-control" v-model="pessoa.nome" id="nome">
                    </div>
                    <div class="form-group">
                        <label for="idade">Idade: </label>
                        <input type="number" class="form-control" v-model="pessoa.idade" id="idade">
                    </div>
                    <div class="form-group">
                        <label for="cpf">CPF: </label>
                        <input type="text" class="form-control" v-model="pessoa.cpf" id="cpf">
                    </div>
                    <div class="form-group">
                        <label for="rg">RG: </label>
                        <input type="text" class="form-control" v-model="pessoa.rg" id="rg">
                    </div>
                    <div class="form-group">
                        <label for="sexo">Sexo: </label>
                        <select v-model="pessoa.sexo" id="sexo" class="form-control">
                            <option value="">Selecionar</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <br>
                    <div class="row justify-content-end">
                        <button class="btn btn-success" v-on:click="post">Cadastrar</button>
                    </div>
                </form>
            </div>
    </div>


</template>

<script>

export default {

    data() {
        return {
            pessoa: {
                nome: "",
                idade: "",
                cpf: "",
                rg: "",
                sexo: ""
            }
        }
    },
    methods: {
        post: function() {
            this.$http.post('http://localhost:3003/pessoa/cadastrar', {
                nome: this.pessoa.nome,
                idade: this.pessoa.idade,
                cpf: this.pessoa.cpf,
                rg: this.pessoa.rg,
                sexo: this.pessoa.sexo,
            }).then((response) => {
                console.log(response);
            });
        }
    }
}


</script>

<style>

</style>
