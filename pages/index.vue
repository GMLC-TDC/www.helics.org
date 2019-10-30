<template>
  <b-container style="padding-top: 60px;">
    <b-container fluid>
      <b-col />
      <b-col cols="11">
        <b-row class="m-1 justify-content-md-center">
          <b-row>
            <logo class="m-1 text-center" />
          </b-row>
          <b-row class="justify-content-md-center">
            <h1
              class="mt-4 mb-2 subtitle justify-content-md-center text-center"
            >Hierarchical Engine for Large-scale Infrastructure Co-Simulation</h1>
            <h2 class="title">HELICS</h2>
          </b-row>
          <div class="m-4 links">
            <b-button size="lg" href="./introduction" variant="outline-secondary">Documentation</b-button>
            <b-button
              size="lg"
              href="https://github.com/GMLC-TDC/HELICS"
              variant="outline-secondary"
            >Source</b-button>
          </div>
        </b-row>
        <b-row class="justify-content-md-center">
          <h1 class="mt-4">About</h1>
        </b-row>
        <p>To meet the President's goal of 80% clean energy by 2035, significant amounts of variable, and increasingly distributed generation, as well as other distributed resources, are expected to enter the U.S. electrical infrastructure. The traditionally abundant reserves in the system have eroded due to increased penetration of variable resources, impairing system reliability. To operate the power system with a leaner reserve margin, distributed generation resources must play a role in maintaining-or improving-system resiliency and reliability. This requires new control and protection systems, along with supporting communication networks. This is a revolution in how the power system is planned and operated: the power system is relying more heavily on hierarchical and distributed control systems with greater dependency on a variety of communication media. However, we lack modeling and simulation capabilities for the industry to understand such transmission distribution and communication (TDC) interdependency but have confidence in deploying systems that will meet, or improve upon, current reliability, efficiency, and cost-effective benchmarks.</p>
        <p>Our flexible and scalable open-source co-simulation framework will fill this gap. We are integrating simulators designed for separate TDC domains to simulate regional and interconnection-scale power system behaviors at unprecedented levels of detail and speed. The target is to scale up to linking a 50,000-node transmission system with millions of distribution nodes, coupled with 100,000 communication points. This simulation should enable planning studies in a turnaround time of minutes to hours, instead of days with today's simulation technologies, a speedup of 50 to 100 times — a feat not previously done before.</p>
        <p>This comprehensive TDC simulation tool is fundamental for investment decision-making by industry. It's also important to help quantify the impact of the ever-increasing high penetration variable generation on power grid reliability and resiliency.</p>
        <p>
          For more information, please visit the
          <a
            href="https://gridmod.labworks.org/projects/1.4.15"
          >GMLC website</a>.
        </p>
        <b-row class="justify-content-md-center">
          <h1 class="mt-4">Partner Laboratories</h1>
        </b-row>

        <b-row align-v="center">
          <b-col>
            <b-img center class="image-logo" src="../assets/logo_argonne.png" />
          </b-col>
          <b-col>
            <b-img center class="image-logo" src="../assets/logo_inl.png" />
          </b-col>
          <b-col>
            <b-img center class="image-logo" src="../assets/logo_lll.jpg" />
          </b-col>
        </b-row>
        <b-row align-v="center">
          <b-col>
            <b-img center class="image-logo" src="../assets/logo_nrel.png" />
          </b-col>
          <b-col>
            <b-img center class="image-logo" src="../assets/logo_oak.png" />
          </b-col>
          <b-col>
            <b-img center class="image-logo" src="../assets/logo_pnnl.jpg" />
          </b-col>
          <b-col>
            <b-img center class="image-logo" src="../assets/logo_sandia.png" />
          </b-col>
        </b-row>
      </b-col>
      <b-col />
    </b-container>
  </b-container>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
.image-logo {
  max-width: 200px;
  width: auto;
  height: auto;
}
</style>
