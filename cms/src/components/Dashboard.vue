<template>
<div id="page-content-wrapper">

  <div class="container-fluid">
    <h3>Kokpit</h3>


    <div class="row">
      <draggable>
        <div class="col-md-3" v-model="pages" v-for="item in pages" style="float:left;">
          <div class="box">
            <h6 class="box-title">{{item.website.title}}
            </h6>
            <hr>


          </div>
        </div>
      </draggable>
    </div>

    <div class="row">

      <draggable>
        <div class="col-md-8" style="float:left;">
          <div class="box">
            <h6 class="box-title">Statystyka</h6>
<hr>

          </div>
        </div>
        <div class="col-md-4" style="float:left;">
          <div class="box">
            <h6 class="box-title">Wejścia</h6>

            <hr>
          </div>
        </div>
      </draggable>
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
    view: function() {
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
  padding: 10px;
}
</style>
