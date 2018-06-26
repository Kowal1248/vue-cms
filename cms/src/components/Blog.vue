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
            <tbody >
              <tr v-for="(item, index) in limitedItems" :key="item._id">
                <td>{{index +1 }}</td>
                <td>{{item.author.firstName}} {{item.author.lastName}}</td>
                <td>{{item.website.title}}</td>
                <td>{{item.category.name}}</td>
                <td v-if="item.status == 'publish'">Opublikowany</td>
                <td v-if="item.status == 'sketch'">Szkic</td>

                <td>{{item.update | formatDate}}</td>
                <td>
                  <router-link :to="'/blog/edit/' + item._id"><a><span class="ti-search table-icon"></span></a></router-link>
                  <span v-on:click="trash(item._id)" class="ti-trash table-icon" style="margin-left:10px;color:rgb(244, 67, 54)"></span>

                </td>
              </tr>
            </tbody>
          </table>
          <button @click="limitNumber += 3" class="btn btn-primary" style="width:100%" v-if="blog.length > limitNumber">Pokaż więcej</button>
          <button @click="limitNumber -= blog.length -3" class="btn btn-primary" style="width:100%" v-if="blog.length <= limitNumber && blog.length != 0">Zwiń liste</button>

        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import blog from '../http/blog'

export default {
  computed: {
    limitedItems() {
      return this.blog.slice(0, this.limitNumber)
    }
  },
  data() {
    return {
      blog: [],
      limitNumber: 3
    }
  },
  methods: {
    get: function() {
      var vm = this
      blog.get()
        .then(function(res) {
          vm.blog = res.data
        })
        .catch(error => {
          vm.$swal('Ups... coś poszło nie tak',
            `Błąd: ${error}`,
            'warning'
          )
        })
    },
    trash: function(id) {
      var vm = this
      this.$swal({
        title: 'Jesteś pewny?',
        text: "Po usunięciu niema opcji przywrócenia!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tak, usuń to!',
        cancelButtonText: 'Zostaw'
      }).then((result) => {
        if (result.value) {
          blog.delete(id)
            .then(function() {
              vm.get()
              vm.$swal(
                'Usunięto!',
                'Element został poprawnie usunięty z bazy',
                'success'
              )
            })
            .catch(error => {
              vm.$swal('Ups... coś poszło nie tak',
                `Błąd: ${error}`,
                'warning'
              )
            })
        }
      })
    }
  },
  beforeMount() {
    this.get()
  }
}
</script>
