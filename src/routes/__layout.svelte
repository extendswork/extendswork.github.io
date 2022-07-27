<script>
  import Footer from "../component/Footer.svelte";
  import "../app.css";
  import Navbar from "../component/Navbar.svelte";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { preferences } from "../store/theme";
  import Wrapper from "../component/Wrapper.svelte";
  import Newsletter from "../component/Newsletter.svelte";

  onMount(() => {
    get(preferences).theme == ""
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  });
</script>

<Navbar />
<Wrapper>
  <slot />
</Wrapper>
<Newsletter />
<Footer />
