<script>
  import PrevSvg from "../assets/Prev.svg";
  import NextSvg from "../assets/Next.svg";
  export let items;
  export let duration = 3000;
  items = [
    {
      img: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      alt: "Slite image item 1",
    },
    {
      img: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "Slite image item 2",
    },
    {
      img: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
      alt: "Slite image item 3",
    },
  ];
  $: current = 0;
  setInterval(() => {
    if (current == items.length - 1) {
      current = 0;
    } else {
      current++;
    }
  }, duration);
</script>

<div class="carousel">
  <!-- Carousel wrapper -->
  <div class="wrapper">
    {#each items as item, index}
      <div class="item {current == index ? 'z-20' : ''}" data-value={index}>
        {#if index == 1}
          <span>{item.alt}</span>
        {/if}
        <img src={item.img} alt={item.alt} />
      </div>
    {/each}
  </div>
  <!-- Slider indicators -->
  <div class="indicators">
    {#each items as item, index}
      <button
        on:click={() => {
          current = index;
        }}
        type="button"
        aria-current={current == index ? true : false}
        aria-label={item.alt}
        data-value={index}
      />
    {/each}
  </div>
  <!-- Slider controls -->
  <button
    on:click={() => {
      if (current == 0) {
        current = items.length - 1;
      } else {
        current--;
      }
    }}
    type="button"
    class="controls top-0 left-0"
    data-carousel-prev=""
  >
    <span class="item">
      <PrevSvg />
      <span class="hidden">Previous</span>
    </span>
  </button>
  <button
    on:click={() => {
      if (current == items.length - 1) {
        current = 0;
      } else {
        current++;
      }
    }}
    type="button"
    class="controls top-0 right-0"
    data-carousel-next=""
  >
    <span class="item">
      <NextSvg />
      <span class="hidden">Next</span>
    </span>
  </button>
</div>
