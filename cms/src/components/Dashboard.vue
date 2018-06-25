<template>
<div id="page-content-wrapper">

  <div class="container-fluid">
    <h3>Kokpit</h3>


    <div class="row">
      <draggable>
        <div class="col-md-3" style="float:left;">
          <div class="box">
            <h6 class="box-title">
              Ilość stron
            </h6>
            <hr>

            <h3> <span class="ti-bar-chart-alt" style="padding-right:20px;color: rgb(33, 150, 243);"></span>2455</h3>

          </div>
        </div>
        <div class="col-md-3" style="float:left;">
          <div class="box">
            <h6 class="box-title">
              Ilość załączników
            </h6>
            <hr>
            <h3> <span class="ti-bar-chart-alt" style="padding-right:20px;color: rgb(255, 87, 34)"></span>2455</h3>


          </div>
        </div>
        <div class="col-md-3" style="float:left;">
          <div class="box">
            <h6 class="box-title">
              Ilość użytkowników
            </h6>
            <hr>
            <h3> <span class="ti-bar-chart-alt" style="padding-right:20px;color: rgb(103, 58, 183);"></span>2455</h3>
          </div>
        </div>
        <div class="col-md-3" style="float:left;">
          <div class="box">
            <h6 class="box-title">
              Ilość wejść
            </h6>
            <hr>
            <h3> <span class="ti-bar-chart-alt" style="padding-right:20px;color: rgb(233, 30, 99);"></span>2455</h3>


          </div>
        </div>
      </draggable>
    </div>

    <div class="row">

      <draggable>
        <div class="col-md-8" style="float:left;">
          <div class="box">
            <h6 class="box-title">Statystyka wejść</h6>
            <hr>
            <canvas id="planet-chart"></canvas>

          </div>
        </div>
        <div class="col-md-4" style="float:left;">
          <div class="box">
            <h6 class="box-title">Lista logowań</h6>

            <hr>
          </div>
        </div>
      </draggable>
    </div>

    <div class="row">
      <div class="col-md-12" style="float:left;">
        <div class="box">
          <h6 class="box-title">Wyślij e-mail'a do zarejestrowanych osób:</h6>
          <hr>

        </div>
          </div>
    </div>

  </div>

</div>
</template>
<script>
import pages from '../http/pages'
import draggable from 'vuedraggable'
import planetChartData from '../assets/chart-data.js';


export default {

  components: {
    draggable,
  },
  data() {
    return {
      planetChartData: planetChartData

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
