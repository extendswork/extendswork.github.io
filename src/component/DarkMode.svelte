<script>
  import { preferences } from "../store/theme.js";
  import Moon from "../assets/Moon.svg";
  import Sun from "../assets/Sun.svg";
  import { get } from "svelte/store";

  const preferencesUpdate = () => {
    // Remove or add LocalStorge and Store
    get(preferences).theme == ""
      ? preferences.set({ theme: "dark" })
      : preferences.set({ theme: "" });
    // Remove or add classes
    get(preferences).theme == ""
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  };
</script>

<button
  on:click={preferencesUpdate}
  type="button"
  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
>
  <Moon
    class={$preferences.theme == "dark"
      ? "hidden"
      : "w-5 h-5 transition-all hover:rotate-45"}
  />
  <Sun
    class={$preferences.theme == "dark"
      ? "w-5 h-5 transition-all hover:rotate-90"
      : "hidden"}
  />
</button>
