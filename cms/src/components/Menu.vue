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
          <h6 class="box-title">Zbuduj menu
        </h6>
          <hr>
          <draggable v-model="pages2"  class="dragArea" :options="{group:'people'}" v-on:change="view">
            <div v-for="item in pages2" :key="item.website.title" class="panel" >
              Tytuł: {{item.website.title}}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-md-8">
        <div class="box">
          <h6 class="box-title">Wybierz stronę
      </h6>
          <hr>
          <draggable v-model="pages"   class="dragArea" :options="{group:'people'}">
            <div v-for="item in pages" :key="item.website.title" class="panel">{{item.website.title}}
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
import draggable from 'vuedraggable'

export default {
  components: {
            draggable,
        },
  data() {
    return {
      pages: [],
      pages2: []
    }
  },
  methods: {
    get: function() {
      var vm = this
      pages.get()
        .then(function(res) {
          vm.pages = res.data
          vm.pages2 = res.data
        })
        .catch(function(res) {
          vm.pages = res.data
        })
    },
    view:function(){
      console.log(this.pages2);
    }

  },
  beforeMount() {
    this.get()
  }
}
</script>
<style >
.panel {
  border: 1px solid #eee;
  border-radius: 0px;
  padding:10px;
}
</style>
