<template>
<div id="page-content-wrapper">
  <div class="container-fluid">
    <h3>Strony</h3>
    <div class="fab">
      <span class="fab-action-button">
            <i class="fab-action-button__icon ti-settings"></i>
        </span>
      <ul class="fab-buttons">

        <li class="fab-buttons__item" v-on:click="trash">
          <a class="fab-buttons__link" data-tooltip="Usuń">
            <i class="icon-material icon-material_tw ti-trash"></i>
          </a>
        </li>
        <li class="fab-buttons__item" v-on:click="save(page,'sketch')">
          <a class="fab-buttons__link" data-tooltip="Dodaj jako szkic">
            <i class="icon-material icon-material_tw ti-pencil"></i>
          </a>
        </li>
        <li class="fab-buttons__item" v-on:click="save(page,'publish')">
          <a class="fab-buttons__link" data-tooltip="Opublikuj !">
            <i class="icon-material icon-material_tw ti-check"></i>
          </a>
        </li>
      </ul>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/pages"><a>Strony</a></router-link>
        </li>

        <li class="breadcrumb-item active" aria-current="page">Edycja</li>
      </ol>
    </nav>

    <div class="box">
      <h6 class="box-title">Tytuł
    </h6>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <input type="text" class="form-control" v-model="page.website.title" v-on:change="changeUrl(page.website.title)">
          <div style="padding-top:10px">Link do strony: <a target="_blank" href="#">{{newUrl}}</a></div>

        </div>
      </div>
    </div>

    <div class="box">
      <h6 class="box-title">Treść
    </h6>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <wysiwyg v-model="page.website.description" />
        </div>
      </div>
    </div>

    <div class="box">
      <h6 class="box-title">SEO
    </h6>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Tytuł strony" v-model="page.seo.metaTitle">
          <textarea name="name" rows="5" cols="80" class="form-control" style="margin-top:20px" v-model="page.seo.metaDescription" placeholder="Opis strony"></textarea>
        </div>
        <div class="col-md-6">
          <h3 style="color: #1a0dab;font-size:18px;font-family: arial,sans-serif;margin-bottom:2px;">{{page.seo.metaTitle}}</h3>
          <a style="color: #006621;font-size:14px;font-family: arial,sans-serif;">{{this.$root.$options.settings.url}}/{{page.website.href}}</a>
          <div style="padding-top:5px;color:#545454; font-size:small;font-family:arial,sans-serif;">
            {{page.seo.metaDescription}}
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
</template>
<script>
import pages from '../http/pages'

export default {
  data() {
    return {
      page: {
        _id: "",
        website: {
          title: "",
          description: "",
          href: ""
        },
        seo: {
          metaTitle: "",
          metaDescription: ""
        }
      },
      newUrl: ""
    }
  },
  methods: {
    changeUrl: function(data) {
      this.newUrl = this.$root.$options.settings.url + '/' + data.replace(" ", "-")
        .replace("ą", "a")
        .replace("ć", "c")
        .replace("ę", "e")
        .replace("ł", "l")
        .replace("ń", "n")
        .replace("ó", "o")
        .replace("ś", "s")
        .replace("ż", "z")
        .replace("ź", "z")
        .replace("Ą", "A")
        .replace("Ć", "C")
        .replace("Ę", "E")
        .replace("Ł", "L")
        .replace("Ń", "N")
        .replace("Ó", "O")
        .replace("Ś", "S")
        .replace("Ż", "Z")
        .replace("Ź", "Z")
    },
    save: function(data, status) {
      var vm = this
      data.website.href = data.website.title
      data.status = status
      pages.put(data)
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
    },
    get: function(data) {
      var vm = this
      pages.get(data)
        .then(function(res) {
          vm.page = res.data
          vm.changeUrl(vm.page.website.title)
        })
        .catch(error => {
          vm.$swal('Ups... coś poszło nie tak',
            `Błąd: ${error}`,
            'warning'
          )
        })
    },
    trash: function() {
      var vm = this
      pages.delete(vm.$route.params.id)
        .then(function() {
          vm.$swal({
              type: "success",
              title: 'Usunąłem dane.',
              showCloseButton: false,
              showConfirmButton: false,
              timer: 1000
            })
            .then(function() {
              vm.$router.push('/pages')
            })
        })

        .catch(error => {
          vm.$swal('Ups... coś poszło nie tak',
            `Błąd: ${error}`,
            'warning'
          )
        })
    }
  },
  beforeMount() {
    this.get(this.$route.params.id)
  }
}
</script>
<style media="screen">
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
