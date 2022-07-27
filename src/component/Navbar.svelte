<script>
  import DarkMode from "./DarkMode.svelte";
  import { page } from "$app/stores";
  import MenuSvg from "../assets/Menu.svg";
  import MenuCloseSvg from "../assets/MenuClose.svg";

  let toogle = false;
  $: current = $page.url.pathname;
  const collapse = () => {
    toogle = !toogle;
  };
</script>

<nav class="navbar">
  <div class="aria">
    <a href="/" class="flex items-center">
      <img src="/favicon-32x32.png" class="mr-3 h-6 sm:h-9" alt="Extends.Work Logo" />
      <span class="brand">Extends.Work</span>
    </a>
    <button
      on:click={collapse}
      aria-expanded={toogle}
      type="button"
      class="menu-button"
    >
      <span class="sr-only">Open main menu</span>
      <MenuSvg class="w-6 h-6 {toogle ? 'hidden' : ''}" />
      <MenuCloseSvg class="w-6 h-6 {toogle ? '' : 'hidden'}" />
    </button>
    <div class="menu {toogle ? '' : 'hidden'}">
      <ul>
        <li>
          <a on:click={collapse} current-page={current == "/"} href="/">Home</a>
        </li>
        <li>
          <a on:click={collapse} current-page={current == "/about"} href="/about">About</a>
        </li>
        <li>
          <a on:click={collapse} current-page={current == "/contact"} href="/contact">Contact</a>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </div>
  </div>
</nav>
