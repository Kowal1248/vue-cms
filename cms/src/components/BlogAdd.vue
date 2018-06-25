<template>
<div id="page-content-wrapper">
  <div class="container-fluid">
    <h3>Blog</h3>
    <div class="fab">
      <span class="fab-action-button">
            <i class="fab-action-button__icon ti-settings"></i>
        </span>
      <ul class="fab-buttons">

        <li class="fab-buttons__item" v-on:click="save(page,'sketch')">
          <a href="#" class="fab-buttons__link" data-tooltip="Dodaj jako szkic">
            <i class="icon-material icon-material_tw ti-pencil"></i>
          </a>
        </li>
        <li class="fab-buttons__item" v-on:click="save(page,'publish')">
          <a href="#" class="fab-buttons__link" data-tooltip="Opublikuj !">
            <i class="icon-material icon-material_tw ti-check"></i>
          </a>
        </li>
      </ul>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/blog"><a>Blog</a></router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Dodanie nowego</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-md-6">

        <div class="box">
          <h6 class="box-title">Tytuł
    </h6>
          <hr>
          <div class="row">
            <div class="col-md-12">
              <input type="text" class="form-control" v-model="page.website.title">
              <div style="padding-top:10px">Link do Blog: <a target="_blank" href="#">{{this.$root.$options.settings.url}}/{{page.website.title}} </a></div>

            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">

        <div class="box">
          <h6 class="box-title">Kategoria
        <span class="ti-plus" style="float:right;" v-on:click="addCategory"></span>
    </h6>
          <hr>
          <div class="row">
            <div class="col-md-12">
{{page.category}}
              <select class="form-control" v-model="page.category">
              <option value="undefined">Brak kategorii</option>
              <option :value="item"  v-for="item in category">{{item.name}}</option>
            </select>
            </div>
          </div>
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
          <input type="text" class="form-control" placeholder="Tytuł Blog" v-model="page.seo.metaTitle">
          <textarea name="name" rows="5" cols="80" class="form-control" style="margin-top:20px" v-model="page.seo.metaDescription" placeholder="Opis Blog"></textarea>
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
import blog from '../http/blog'
import category from '../http/category'

export default {

  data() {
    return {
      category: [],
      page: {
        category: {},
        website: {
          title: "",
          description: "",
          href: ""
        },
        seo: {
          metaTitle: "",
          metaDescription: ""
        }
      }
    }
  },
  methods: {
    getCategory: function() {
      var vm = this
      category.get()
        .then(function(res) {
          vm.category = res.data
        })
        .catch(function(res) {

        })
    },
    addCategory: function() {
      var vm = this
      this.$swal({
        title: 'Podaj nazwę nowej kategorii',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Zapisz',
        cancelButtonText: 'Zamknij',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          console.log(login);
          return category.save({
              name: login
            })
            .then(response => {


            })
            .catch(error => {
              vm.$swal.showValidationError(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !swal.isLoading()
      }).then((result) => {
        if (result.value) {
          vm.getCategory()
          vm.$swal({
            title: "Zapisałem kategorie",
            type: "success",
            showCloseButton: false,
            showConfirmButton: false,
            timer: 1000
          })
        }
      })
    },
    save: function(data, status) {
      var vm = this
      data.website.href = data.website.title
      data.status = status
      blog.save(data)
        .then(function(res) {
          vm.$swal({
            type: "success",
            title: 'Zapisałem',
            showCloseButton: false,
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch(function(res) {
          vm.$swal('err')
        })
    }
  },
  beforeMount() {
    this.getCategory()
  }
}
</script>
<style media="screen">
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
