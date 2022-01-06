<script>
  import '../app.css'
  import NavBar from '$lib/NavBar.svelte'
  import Footer from '$lib/Footer.svelte'
  import { page } from '$app/stores'
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  let title = capitalize(page.url.pathname.substring(1))
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta property="og:title" content={title} />
  <meta property="twitter:title" content={title} />
</svelte:head>

<div class="h-screen w-full grid grid-rows-[auto_1fr_auto]">
  <NavBar />
  <div class="grid mx-8 md:mx-16 mt-6">
    <slot />
  </div>
  <Footer />
</div>
