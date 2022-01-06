<script>
  import '../app.css'
  import NavBar from '$lib/NavBar.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<div class="h-screen w-full grid grid-rows-[auto_1fr_auto]">
  <NavBar />
  <div class="grid mx-8 md:mx-16 mt-6">
    <slot />
  </div>
  <Footer />
</div>
