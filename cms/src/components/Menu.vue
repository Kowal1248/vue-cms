<template>
<div id="page-content-wrapper">


  <div class="container-fluid">
    <h3>Menu</h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/Menu"><a>Menu</a></router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Podgląd wszystkich</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-md-4">
        <div class="box">
          <h6 class="box-title">Menu
            <span class="ti-check" style="float:right" v-on:click="save"></span>
        </h6>
          <hr>
          <draggable v-model="menu" class="dragArea" :options="{group:'people'}">
            <div v-for="item in menu" :key="item.name" class="panel" style="margin-bottom:10px">
              <span class="ti-trash" style="float:right" v-on:click="trash(item.idPage)"></span>

              <p>Nazwa: <input type="text" name="" v-model="item.name"></p>
              <p>Url: {{$root.$options.settings.url}}/{{item.website.href}}</p>
            </div>
            <div v-if="menu.length == 0">
              Tutaj przeciągnij
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-md-8">
        <div class="box">
          <h6 class="box-title">Wybierz stronę
      </h6>
          <hr>
          <draggable v-model="pages" class="dragArea" :options="{group:'people'}">
            <div v-for="item in pages" :key="item.website.title" class="panel" v-if="check(item._id)">{{item.website.title}}
            </div>
            <div v-if="pages.length == 0">
              Tutaj przeciągnij
            </div>
          </draggable>
        </div>
      </div>

    </div>

  </div>
</div>
</template>
<script>
import pages from '../http/pages'
import menu from '../http/menu'

import draggable from 'vuedraggable'

export default {
  components: {
    draggable,
  },
  data() {
    return {
      pages: [],
      menu: [],
      tmpMenu: []
    }
  },
  methods: {
    getPages: function() {
      var vm = this
      pages.get()
        .then(function(res) {
          vm.pages = res.data
        })
        .catch(error => {
          vm.$swal('Ups... coś poszło nie tak',
            `Błąd: ${error}`,
            'warning'
          )
        })
    },
    getMenu: function() {
      var vm = this
      menu.get()
        .then(function(res) {
          if (res.data.length != 0) {
            vm.menu = res.data
            vm.tmpMenu = res.data
          }
        })
        .catch(error => {
          vm.$swal('Ups... coś poszło nie tak',
            `Błąd: ${error}`,
            'warning'
          )
        })
    },
    view: function() {
    },
    save: function() {
      var v = this
      var i = 0
      for (i = 0; i < v.tmpMenu.length; i++) {
        menu.delete(v.tmpMenu[i]._id)
          .then(function() {
            v.getMenu()
          })
          .catch(error => {
            v.$swal('Ups... coś poszło nie tak',
              `Błąd: ${error}`,
              'warning'
            )
          })

      }
      for (i = 0; i < v.menu.length; i++) {
        menu.save({
            name: v.menu[i].name,
            idPage: v.menu[i]._id,
            website: v.menu[i].website,
            index: i
          })
          .catch(error => {
            v.$swal('Ups... coś poszło nie tak',
              `Błąd: ${error}`,
              'warning'
            )
          })

        if (i == v.menu.length - 1)
          v.$swal({
            type: "success",
            title: 'Zapisałem',
            showCloseButton: false,
            showConfirmButton: false,
            timer: 1000
          })
      }
    },
    trash: function(id) {
      var vm = this

      for (var i = 0; i < this.menu.length; i++) {
        if (this.menu[i].idPage == id) {
          id = vm.menu[i]._id
          this.menu.splice(this.menu.indexOf(menu[i]), 1);
        }
      }

      menu.delete(id)
        .then(function() {
          vm.getMenu()
        })
        .catch(error => {
          vm.$swal('Ups... coś poszło nie tak',
            `Błąd: ${error}`,
            'warning'
          )
        })

    },
    check: function(id) {

      var menu = this.menu
      var view = true
      for (var i = 0; i < menu.length; i++) {
        if (menu[i].idPage == id) {
          view = false
        }
      }
      return view
    }

  },
  beforeMount() {
    this.getMenu()
    this.getPages()
  }
}
</script>
