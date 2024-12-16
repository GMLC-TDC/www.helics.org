<script lang="ts">
  import { base } from '$app/paths'
  import { getStores, navigating, page, session } from '$app/stores'
  import { faBookOpen, faComments, faDownload } from '@fortawesome/free-solid-svg-icons'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import Icon from 'svelte-awesome/components/Icon.svelte'
</script>

<nav
  class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light mb-6"
>
  <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <button
      class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        class="w-6"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        />
      </svg>
    </button>
    <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
      <a class="text-xl text-white pr-2 font-semibold" href="/">HELICS</a>
      <!-- Left links -->
      <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
        <li class="nav-item p-2">
          <a
            class="nav-link text-white {$page.url.pathname == '/introduction'
              ? ''
              : 'opacity-60 hover:opacity-80 focus:opacity-80 p-0'}"
            href="/introduction">Getting Started</a
          >
        </li>
        <li class="nav-item p-2">
          <a
            class="nav-link text-white {$page.url.pathname == '/tools'
              ? ''
              : 'opacity-60 hover:opacity-80 focus:opacity-80 p-0'}"
            href="/tools">Showcase</a
          >
        </li>
        <li class="nav-item p-2">
          <a
            class="nav-link text-white {$page.url.pathname == '/about'
              ? ''
              : 'opacity-60 hover:opacity-80 focus:opacity-80 p-0'}"
            href="/about">Team</a
          >
        </li>
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="flex items-center relative space-x-6">
      <!-- Icons -->
      <a
        alt="docs"
        class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
        target="_blank"
        href="https://docs.helics.org"
      >
        <Icon data={faBookOpen} />
      </a>
      <a
        alt="chat"
        class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
        target="_blank"
        href="https://matrix.to/#/#GMLC-TDC_HELICS:gitter.im"
      >
        <Icon data={faComments} />
      </a>
      <a
        alt="download"
        class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
        target="_blank"
        href="https://github.com/GMLC-TDC/HELICS/releases/latest"
      >
        <Icon data={faDownload} />
      </a>
      <a
        alt="github"
        class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
        target="_blank"
        href="https://github.com/GMLC-TDC/HELICS"
      >
        <Icon data={faGithub} />
      </a>
    </div>
    <!-- Right elements -->
  </div>
</nav>
