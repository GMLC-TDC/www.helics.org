<template>
  <div>
    <b-navbar
      class="header"
      fixed="top"
      toggleable="lg"
      type="dark"
      variant="primary"
    >
      <b-navbar-brand tag="h1" class="mb-0" href="./">HELICS</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Documentation">
            <b-dropdown-item href="./introduction">Introduction</b-dropdown-item>
            <b-dropdown-item
              href="https://helics.readthedocs.io/en/latest/user-guide/index.html"
            >User Guide</b-dropdown-item>
            <b-dropdown-item href="https://github.com/GMLC-TDC/HELICS-Examples">Examples</b-dropdown-item>
            <b-dropdown-item
              href="https://www.youtube.com/channel/UCPa81c4BVXEYXt2EShTzbcg"
            >YouTube Tutorials</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="https://github.com/GMLC-TDC/HELICS/releases/latest">Download</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="https://github.com/GMLC-TDC/HELICS/" right>Get Source</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
