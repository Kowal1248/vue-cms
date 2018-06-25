<template>
<div id="page-content-wrapper">
  <div class="container-fluid">
    <h3>Blog</h3>


    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/"><a>Blog</a></router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Podgląd wszystkich</li>
      </ol>
    </nav>


    <div class="box">
      <h6 class="box-title">Blog

        <router-link to="/blog/add"><a><span class="ti-plus" style="float:right"></span></a></router-link>
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
                <th>Kategoria</th>
                <th>Status</th>
                <th>Data publikacji</th>
                <th>Operacje</th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in blog">
              <tr>
                <td>{{index +1 }}</td>
                <td>{{item.author.firstName}} {{item.author.lastName}}</td>
                <td>{{item.website.title}}</td>
                <td>{{item.category.name}}</td>
                <td v-if="item.status == 'publish'">Opublikowany</td>
                <td v-if="item.status == 'sketch'">Szkic</td>

                <td>{{item.update | formatDate}}</td>
                <td>
                  <router-link :to="'/blog/edit/' + item._id"><a><span class="ti-search table-icon"></span></a></router-link>
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
import blog from '../http/blog'

export default {
  data() {
    return {
      blog: []
    }
  },
  methods: {
    get: function() {
      var vm = this
      blog.get()
        .then(function(res) {
          vm.blog = res.data
        })
        .catch(function(res) {
          vm.blog = res.data
        })
    }

  },
  beforeMount() {
    this.get()
  }
}
</script>
