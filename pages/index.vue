<template>
  <b-container style="padding-top: 60px">
    <b-container fluid>
      <b-row class="mt-4 mb-4">
        <b-col />
        <b-col class="mt-4 mb-4" cols="12">
          <b-row class="m-1 justify-content-md-center">
            <b-row>
              <logo class="m-1 text-center" />
            </b-row>
            <b-row class="justify-content-md-center">
              <h1
                class="mt-4 mb-2 subtitle justify-content-md-center text-center"
              >
                Hierarchical Engine for Large-scale Infrastructure Co-Simulation
                (HELICS)
              </h1>
            </b-row>
            <div class="m-4 links">
              <b-button
                size="lg"
                href="./introduction"
                variant="outline-secondary"
                >Getting Started</b-button
              >
              <b-button
                size="lg"
                href="https://beta.mybinder.org/v2/gh/GMLC-TDC/pesgm-2019-helics-tutorial/master?urlpath=lab/tree/notebooks/cosimulation-introduction.ipynb"
                variant="primary"
                >Try HELICS online</b-button
              >
            </div>
          </b-row>
          <b-row class="justify-content-md-center">
            <h1 class="mt-4">About</h1>
          </b-row>
          <b-row>
            <p>
              Our flexible and scalable open-source co-simulation framework is
              designed to integrate simulators designed for separate TDC domains
              to simulate regional and interconnection-scale power system
              behaviors at unprecedented levels of detail and speed. The target
              is to scale up to linking a 50,000-node transmission system with
              millions of distribution nodes, coupled with 100,000 communication
              points. This simulation should enable planning studies in a
              turnaround time of minutes to hours, instead of days with today's
              simulation technologies, a speedup of 50 to 100 times — a feat not
              previously done before.
            </p>
            <p>
              This comprehensive TDC simulation tool is fundamental for
              investment decision-making by industry. It's also important to
              help quantify the impact of the ever-increasing high penetration
              variable generation on power grid reliability and resiliency.
            </p>
            <p>
              For more information, please visit the
              <a href="https://gmlc.doe.gov/">GMLC website</a>.
            </p>
          </b-row>
          <b-row class="justify-content-md-center">
            <h1 class="mt-4">Partner Laboratories</h1>
          </b-row>

          <b-row align-v="center">
            <b-col>
              <b-img center class="image-logo" src="/assets/logo_argonne.png" />
            </b-col>
            <b-col>
              <b-img center class="image-logo" src="/assets/logo_inl.png" />
            </b-col>
            <b-col>
              <b-img center class="image-logo" src="/assets/logo_lll.jpg" />
            </b-col>
          </b-row>
          <b-row align-v="center">
            <b-col>
              <b-img center class="image-logo" src="/assets/logo_nrel.png" />
            </b-col>
            <b-col>
              <b-img center class="image-logo" src="/assets/logo_oak.png" />
            </b-col>
            <b-col>
              <b-img center class="image-logo" src="/assets/logo_pnnl.jpg" />
            </b-col>
            <b-col>
              <b-img center class="image-logo" src="/assets/logo_sandia.png" />
            </b-col>
          </b-row>
        </b-col>
        <b-col />
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo,
  },
}
</script>

<style>
.image-logo {
  max-width: 200px;
  width: auto;
  height: auto;
}
</style>
