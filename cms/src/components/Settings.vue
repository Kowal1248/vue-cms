<template>
<div id="page-content-wrapper">
  <div class="container-fluid">
    <h3>Ustawienia</h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/"><a>Strona główna</a></router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Ustawienia</li>
      </ol>
    </nav>

    <div class="box">
      <h6 class="box-title">Ustawienia podstawowe
        <span class="ti-check" style="float:right" v-on:click="save">
      </span>
</h6>
        <hr>
        <div class="row">
          <div class="col-md-6">
            <label>Tytuł strony</label>
            <input type="text" class="form-control" v-model="settings.title">
            <label>Opis strony</label>
            <textarea name="name" rows="5" cols="80" class="form-control" v-model="settings.description"></textarea>
          </div>
          <div class="col-md-6">
            <label>Adres serwera</label>
            <input type="text" class="form-control" v-model="settings.url">

          </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
import settings from '../http/settings'

export default {
  data() {
    return {
      loading: false,
      settings: []
    }
  },
  methods: {
    save() {
      var vm = this
      settings.save(this.settings)
      .then(function(res){
        console.log(res);
        vm.$swal({
          type: "success",
          title: 'Zapisałem',
          showCloseButton: false,
          showConfirmButton: false,
          timer: 1000
        })
      })
      .catch(function(res){
        console.log(res);
      })
    }
  },
  mounted() {
    this.$Progress.finish()
  },
  created() {
    let vm = this
    settings.get().then(function(res){
      vm.settings = res.data[0];
    })
  }
}
</script>
