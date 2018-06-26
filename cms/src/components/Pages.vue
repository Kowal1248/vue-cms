<template>
<div id="page-content-wrapper">
  <div class="container-fluid">
    <h3>{{lang.title}}</h3>


    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/"><a>{{lang.title}}</a></router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{langBreadcrumb.viewAll}}</li>
      </ol>
    </nav>


    <div class="box">
      <h6 class="box-title">{{lang.listPages}}

        <router-link to="/pages/add"><a><span class="ti-plus" style="float:right"></span></a></router-link>
    </h6>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>{{lang.table.number}}</th>
                <th>{{lang.table.author}}</th>
                <th>{{lang.table.name}}</th>
                <th>{{lang.table.data}}</th>
                <th>{{lang.table.operations}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in limitedItems" :key="item._id">
                <td>{{index +1 }}</td>
                <td>{{item.author.firstName}} {{item.author.lastName}}</td>
                <td>{{item.website.title}}</td>
                <td>24.01.2018 14:33</td>
                <td>
                  <router-link :to="'/pages/edit/' + item._id"><a><span class="ti-search table-icon"></span></a></router-link>
                  <span v-on:click="trash(item._id)" class="ti-trash table-icon" style="margin-left:10px;color:rgb(244, 67, 54)"></span>
                </td>
              </tr>
            </tbody>
          </table>
          <button @click="limitNumber += 3" class="btn btn-primary" style="width:100%" v-if="pages.length > limitNumber">{{langButton.expandList}}</button>
          <button @click="limitNumber -= 3" class="btn btn-primary" style="width:100%" v-if="pages.length <= limitNumber && pages.length != 0">{{langButton.closeList}}</button>

        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import pages from '../http/pages'

export default {
  computed: {
    limitedItems() {
      return this.pages.slice(0, this.limitNumber)
    }
  },
  data() {
    return {
      pages: [],
      limitNumber: 3,
      lang: this.$root.$options.language.pages,
      langAlert: this.$root.$options.language.alert,
      langButton: this.$root.$options.language.button,
      langBreadcrumb: this.$root.$options.language.breadcrumb
    }
  },
  methods: {
    get: function() {
      var vm = this
      pages.get()
        .then(function(res) {
          vm.pages = res.data

        })
        .catch(error => {
          vm.$swal(vm.langAlert.titleCatch,
            vm.langAlert.textError + `${error}`,
            'warning'
          )
        })
    },
    trash: function(id) {
      var vm = this
      this.$swal({
        title: vm.langAlert.titleAreYoSure,
        text: vm.langAlert.textDelete,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: vm.langButton.deleteElement,
        cancelButtonText: vm.langButton.closeButton
      }).then((result) => {
        if (result.value) {
          pages.delete(id)
            .then(function() {
              vm.get()
              vm.$swal(
                vm.langAlert.titleDelete,
                vm.langAlert.textCompleteDelete,
                'success'
              )
            })
            .catch(error => {
              vm.$swal(vm.langAlert.titleCatch,
                vm.langAlert.textError + `${error}`,
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
