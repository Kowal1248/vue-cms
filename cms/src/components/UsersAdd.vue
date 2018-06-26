<template>
<div id="page-content-wrapper">
  <div class="container-fluid">
    <h3>Użytkownicy</h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/users"><a>Użytkownicy</a></router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Dodanie użytkownika</li>
      </ol>
    </nav>

    <div class="box">
      <h6 class="box-title">Dodanie użytkownika

    </h6>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <form @submit.prevent="save">
            <div class="row">
              <div class="col-md-4">
                <label for="">Imię:</label>
                <input type="text" name="" value="" class="form-control" v-model="person.firstName">
              </div>
              <div class="col-md-4">
                <label for="">Nazwisko:</label>
                <input type="text" name="" value="" class="form-control" v-model="person.lastName">
              </div>
              <div class="col-md-4">
                <label for="">Alias:</label>
                <input type="text" name="" value="" class="form-control" v-model="person.alias">
              </div>


            </div>
            <div class="row" style="margin-top:10px">
              <div class="col-md-4">
                <label for="">E-mail:</label>
                <input type="text" name="" value="" class="form-control" v-model="person.email">
              </div>

              <div class="col-md-4">
                <label for="">Hasło:</label>
                <input type="text" name="" value="" class="form-control" v-model="person.password">
              </div>

              <div class="col-md-4">
                <label for="">Uprawnienia:</label>
                <input type="text" name="" value="" class="form-control" v-model="person.permission">
              </div>
            </div>
            <div class="row" style="margin-top:10px">
              <div class="col-md-12">
                <button type="submit" name="button" class="btn btn-primary" style="float:right">Zapisz</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import users from '../http/users'
export default {
  data() {
    return {
      person: {
        firstName: "",
        lastName: "",
        alias: "",
        email: "",
        password: "",
        permission: ""
      }
    }
  },
  methods: {
    save() {
      var vm = this
      users.save(this.person)
        .then(function() {
          vm.$swal({
            type: "success",
            title: 'Zapisałem',
            showCloseButton: false,
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch(error => {
          vm.$swal('Ups... coś poszło nie tak',
            `Błąd: ${error}`,
            'warning'
          )
        })
    }
  }
}
</script>
