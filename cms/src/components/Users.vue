<template>
<div id="page-content-wrapper">
  <div class="container-fluid">
    <h3>Użytkownicy</h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/users"><a>Użytkownicy</a></router-link></li>
          <li class="breadcrumb-item active" aria-current="page">Podgląd wszystkich</li>
      </ol>
    </nav>

    <div class="box">
      <h6 class="box-title">Użytkownicy

        <router-link to="/users/add"><a><span class="ti-plus" style="float:right"></span></a></router-link>
    </h6>
      <hr>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Nr</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Alias</th>
                <th>E-mail</th>
                <th>Operacje</th>
              </tr>
            </thead>
            <tbody v-for="(item, index) in users">
              <tr>
                <td>{{index +1 }}</td>
                <td>{{item.firstName}}</td>
                <td>{{item.lastName}}</td>
                <td>{{item.alias}}</td>
                <td>{{item.email}}</td>
                <td>
                  <router-link :to="'/users/edit/' + item._id"><a><span class="ti-search table-icon"></span></a></router-link>
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
import users from '../http/users'
export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    get() {
      var vm = this
      users.get()
      .then(function(res){
        console.log(res.data);
        vm.users = res.data
      })
      .catch(function(res){
        console.log(res);
      })
    }
  },
  beforeMount() {
    this.get()
  }
}
</script>
