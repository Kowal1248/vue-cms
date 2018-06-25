<template>
<div id="page-content-wrapper">
  <div class="container-fluid">
    <h3>Strony</h3>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><router-link to="/pages"><a>Strony</a></router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Dodanie nowego</li>
  </ol>
</nav>
    <div class="box">
      <h6 class="box-title">Operacje
    </h6>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <button type="button" name="button" class="btn btn-danger">Usuń</button>
          <button type="button" name="button" class="btn btn-primary" v-on:click="save(page)">Opublikuj</button>
        </div>
      </div>
    </div>
    <div class="box">
      <h6 class="box-title">Tytuł
    </h6>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <input type="text" class="form-control" v-model="page.website.title">
          <div style="padding-top:10px">Link do strony: <a target="_blank" href="#">{{this.$root.$options.settings.url}}/{{page.website.title}} </a></div>

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
          <a style="color: #006621;font-size:14px;font-family: arial,sans-serif;">{{page.website.href}}</a>
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
      page:{
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
    save: function(data) {
      var vm = this
      pages.save(data)
      .then(function(res){
        vm.$swal('success')
      })
      .catch(function(res){
        vm.$swal('err')

      })
    }
}
}
</script>
<style media="screen">
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
</style>
