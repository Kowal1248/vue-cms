<template>
<div id="page-content-wrapper">

  <div class="container-fluid">
    <h3>{{lang.title}}</h3>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          System aktualny: v.1.0.0
        </li>
      </ol>
    </nav>

    <div class="row">
      <div class="col-md-12" style="padding:0px;">


      <draggable>
        <div class="col-md-3" style="float:left;">
          <div class="box">
            <h6 class="box-title">
              {{lang.numberOfPage}}
            </h6>
            <hr>

            <h3> <span class="ti-bar-chart-alt" style="padding-right:20px;color: rgb(33, 150, 243);"></span>2455</h3>

          </div>
        </div>
        <div class="col-md-3" style="float:left;">
          <div class="box">
            <h6 class="box-title">
              {{lang.numberAttachment}}
            </h6>
            <hr>
            <h3> <span class="ti-bar-chart-alt" style="padding-right:20px;color: rgb(255, 87, 34)"></span>2455</h3>


          </div>
        </div>
        <div class="col-md-3" style="float:left;">
          <div class="box">
            <h6 class="box-title">
              {{lang.numberUsers}}
            </h6>
            <hr>
            <h3> <span class="ti-bar-chart-alt" style="padding-right:20px;color: rgb(103, 58, 183);"></span>2455</h3>
          </div>
        </div>
        <div class="col-md-3" style="float:left;">
          <div class="box">
            <h6 class="box-title">
              {{lang.numberInput}}
            </h6>
            <hr>
            <h3> <span class="ti-bar-chart-alt" style="padding-right:20px;color: rgb(233, 30, 99);"></span>2455</h3>


          </div>
        </div>
      </draggable>
        </div>
    </div>

    <div class="row">
      <div class="col-md-12" style="padding:0px">


      <draggable>
        <div class="col-md-7" style="float:left;">
          <div class="box">
            <h6 class="box-title">{{lang.inputStatistic}}</h6>
            <hr>
            <canvas id="planet-chart"></canvas>

          </div>
        </div>
        <div class="col-md-5" style="float:left;">
          <div class="box">
            <h6 class="box-title">{{lang.listLogin}}</h6>
            <table class="table">
              <thead>

                  <th>{{lang.table.number}}</th>
                  <th>{{lang.table.email}}</th>
                  <th>{{lang.table.ip}}</th>
                  <th>{{lang.table.data}}</th>

              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>admin@ex.pl</td>
                  <td>89.99.21.222</td>
                  <td>21.01.2018 16:30</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>admin@ex.pl</td>
                  <td>89.99.21.222</td>
                  <td>21.01.2018 16:30</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>admin@ex.pl</td>
                  <td>89.99.21.222</td>
                  <td>21.01.2018 16:30</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>admin@ex.pl</td>
                  <td>89.99.21.222</td>
                  <td>21.01.2018 16:30</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>admin@ex.pl</td>
                  <td>89.99.21.222</td>
                  <td>21.01.2018 16:30</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>admin@ex.pl</td>
                  <td>89.99.21.222</td>
                  <td>21.01.2018 16:30</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>admin@ex.pl</td>
                  <td>89.99.21.222</td>
                  <td>21.01.2018 16:30</td>
                </tr>
              </tbody>
            </table>
            <hr>
          </div>
        </div>
      </draggable>
    </div>
  </div>


  </div>

</div>
</template>
<script>
import draggable from 'vuedraggable'
import planetChartData from '../assets/chart-data.js';
import Chart from 'chart.js';


export default {

  components: {
    draggable
  },
  data() {
    return {
      planetChartData: planetChartData,
      lang: this.$root.$options.language.dashboard
    }
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  },
  mounted() {
    console.log(this.lang);
    this.createChart('planet-chart', this.planetChartData);
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
