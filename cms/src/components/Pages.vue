<template>
<div id="page-content-wrapper">
  <div class="container-fluid">
    <h3>Strony</h3>


    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/"><a>Strony</a></router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Podgląd wszystkich</li>
      </ol>
    </nav>


    <div class="box">
      <h6 class="box-title">Strony

        <router-link to="/pages/add"><a><span class="ti-plus" style="float:right"></span></a></router-link>
    </h6>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Nr</th>
                <th>Autor</th>
                <th>Nazwa</th>
                <th>Data publikacji</th>
                <th>Operacje</th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in pages">
              <tr>
                <td>{{index +1 }}</td>
                <td></td>
                <td>{{item.website.title}}</td>
                <td>24.01.2018 14:33</td>
                <td>
                  <router-link :to="'/pages/edit/' + item._id"><a><span class="ti-search table-icon"></span></a></router-link>
                </td>
              </tr>
            </tbody>
          </table>
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
      pages: []
    }
  },
  methods: {
    get: function() {
      var vm = this
      pages.get()
        .then(function(res) {
          vm.pages = res.data
        })
        .catch(function(res) {
          vm.pages = res.data
        })
    }

  },
  beforeMount() {
    this.get()
  }
}
</script>
