<template>
<div id="page-content-wrapper">
  <div class="container-fluid">
    <h3>Użytkownicy</h3>
    <div class="fab">
      <span class="fab-action-button">
            <i class="fab-action-button__icon ti-settings"></i>
        </span>
      <ul class="fab-buttons">

        <li class="fab-buttons__item" v-on:click="save()">
          <a href="#" class="fab-buttons__link" data-tooltip="Zapisz">
            <i class="icon-material icon-material_tw ti-check"></i>
          </a>
        </li>
      </ul>
    </div>
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
            </div>
            <div class="row" style="margin-top:10px">
              <div class="col-md-12">
              </div>
            </div>

        </div>
      </div>

    </div>
    <div class="box">
      <h6 class="box-title">Uprawnienia

    </h6>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <table class="table">
    <thead>
      <tr>
        <th>Nr</th>
        <th>Nazwa</th>
        <th>Wyświetlenie</th>
        <th>Zapis</th>
        <th>Edycja</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Media</td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.media.view">
        </td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.media.save">
        </td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.media.edit">
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Strony</td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.pages.view">
        </td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.pages.save">
        </td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.pages.edit">
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Blog</td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.blog.view">
        </td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.blog.save">
        </td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.blog.edit">
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>Menu</td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.menu.view">
        </td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.menu.save">
        </td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.menu.edit">
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>Ustawienia</td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.settings.view">
        </td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.settings.save">
        </td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.settings.edit">
        </td>
      </tr>
      <tr>
        <td>6</td>
        <td>Użytkownicy</td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.person.view">
        </td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.person.save">
        </td>
        <td>
          <input type="checkbox" class="form-check-input" v-model="person.permission.person.edit">
        </td>
      </tr>
    </tbody>
    <tbody>

    </tbody>

  </table>
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
        permission: {
          media: {
            view: false,
            save: false,
            edit: false
          },
          pages: {
            view: false,
            save: false,
            edit: false
          },
          blog: {
            view: false,
            save: false,
            edit: false
          },
          menu: {
            view: false,
            save: false,
            edit: false
          },
          settings: {
            view: false,
            save: false,
            edit: false
          },
          person: {
            view: false,
            save: false,
            edit: false
          }
        }
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
            'warniv'
          )
        })
    }
  }
}
</script>
