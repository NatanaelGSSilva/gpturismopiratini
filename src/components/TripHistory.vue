<template>
  <div id="listagem" style="margin-top:100px">
    <div class="container mt-3">
      <div class="card">
        <h5 class="card-header">Lista de Viagens</h5>
        <div class="card-body">
          <table class="table table-hover table-sm">
            <thead>
              <tr>
                <th>Cód.</th>
                <th>Saida</th>
                <th>Destino</th>
                <th>Valor</th>
                <th>Horário Saída</th>
                <th>Horário Chegada</th>
                <th>Tipo Viagem</th>
                <th>Galeria</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="viagem in viagens" v-bind:key="viagem.id">
                <td>{{viagem.idViagens}}</td>
                <td>{{viagem.cidadePartida}}</td>
                <td>{{viagem.cidadeChegada}}</td>
                <td>{{viagem.valor}}</td>
                <td>{{viagem.horaPartida}}</td>
                <td>{{viagem.horaChegada}}</td>
                <td>{{viagem.tipoViagem}}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HistoryPage",
  data() {
    return {
      viagens: null
    };
  },
  mounted() {
    this.listar();
  },
  methods: {
    listar() {
      axios
        .get(this.$MainURL +"/viagens")
        .then(response => (this.viagens = response.data));
    },
  }
};
</script>

<style scoped>
</style>