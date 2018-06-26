<template>
<div id="page-content-wrapper">


  <div class="container-fluid">
    <h3>Media</h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/media"><a>{{lang.title}}</a></router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Podgląd wszystkich</li>
      </ol>
    </nav>
    <div class="box">
      <h6 class="box-title">{{lang.addFile}}
    </h6>
      <hr>
      <div class="large-12 medium-12 small-12 cell">

        <input type="file" id="file" ref="file" class="form-control" style="width:90%;float:left"  v-on:change="handleFileUpload()" />

        <button v-on:click="submitFile()" class="btn btn-primary" style="margin-left:20px">{{langButton.send}}</button>
      </div>
    </div>
<div class="row">
<div class="col-md-12">

    <div class="box" style="height:500px;overflow-y:auto">
      <h6 class="box-title">{{lang.files}}
    </h6>
      <hr>
      <div v-for="item in limitedItems" v-if="item.media != undefined" :key="item._id">
        <div class="card" style="width: 18rem;float:left;margin:5px;width:200px;">
          <clazy-load v-bind:src="url + item.media" class="card-img-top">
            <img v-bind:src="url + item.media" class="card-img-top" style="height:120px;">
            <div class="preloader" slot="placeholder">
              <div class="loader"></div>
            </div>
          </clazy-load>
          <div class="card-body">
            <p class="card-text">
              <span class="ti-trash" style="float:right" v-on:click="del(item)"></span>

              <span class="ti-search" v-on:click="show(item)"></span>
            </p>
          </div>
        </div>
      </div>
      <div v-if="files.length == 0">
        <h3 style="text-align:center;padding-top:15%;">{{lang.noFile}}</h3>
      </div>
      <button @click="limitNumber += 3" class="btn btn-primary" style="width:100%" v-if="files.length > limitNumber">{{langButton.expandList}}</button>
      <button @click="limitNumber -= files.length -3" class="btn btn-primary" style="width:100%" v-if="files.length <= limitNumber && files.length != 0">{{langButton.closeList}}</button>

    </div>
        </div></div>



    <v-dialog height="auto" :scrollable="true" />
  </div>
</div>
</template>
<style media="screen">
.loader {
  border: 5px solid #eee;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.container {
  margin-top: 20px;
}

.image-preview-input {
  position: relative;
  overflow: hidden;
  margin: 0px;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}

.image-preview-input input[type=file] {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
}

.image-preview-input-title {
  margin-left: 2px;
}

.v--modal-overlay {
  z-index: 9999;
}
</style>
<script>
import media from '../http/media'

export default {
  computed: {
    limitedItems() {
      return this.files.slice(0,this.limitNumber)
    }
  },
  data() {
    return {
      files: [],
      url: this.$root.$options.settings.url + "/media/",
      data: "",
      limitNumber: 3,
      lang: this.$root.$options.language.media,
      langButton: this.$root.$options.language.button
    }
  },
  methods: {
    show(data) {
      this.data = this.url + data.media
      this.$modal.show('dialog', {
        title: 'Obrazek',
        text: '<div style="height:300px;overflow-y:auto"><img src="' + this.data + '"/></div>',
        buttons: [{
            title: 'Skopiuj adres',
            handler: () => {
              let container = this.$refs.container
              this.$copyText(this.data, container)
              this.$swal('Skopiowałem')
            }
          },
          {
            title: 'Pokaż w nowej karcie',
            default: true,
            handler: () => {
              window.open(this.data, '_blank');
            }
          },
          {
            title: 'Zamknij'
          }
        ]
      });
    },
    hide() {
      this.data = ""
      this.$modal.hide('hello-world');
    },
    get() {
      var vm = this

      media.get()
        .then(function(res) {
          vm.files = res.data
        })
        .catch(error => {
          vm.$swal('Ups... coś poszło nie tak',
            `Błąd: ${error}`,
            'warning'
          )
        })
    },
    del(item) {
      var vm = this
      media.delete(item)
        .then(function() {
          vm.get()
        })
        .catch(error => {
          vm.$swal('Ups... coś poszło nie tak',
            `Błąd: ${error}`,
            'warning'
          )
        })
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      var vm = this
      media.post(this.file)
        .then(function() {
          vm.$swal({
            type: "success",
            title: 'Zapisałem',
            showCloseButton: false,
            showConfirmButton: false,
            timer: 1000
          })
          vm.get()
        })
        .catch(error => {
          vm.$swal('Ups... coś poszło nie tak',
            `Błąd: ${error}`,
            'warning'
          )
        })
    },
  },

  beforeMount() {

    this.get()
  }
}
</script>
