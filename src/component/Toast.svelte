<script>
  import SuccesSvg from "../assets/Succes.svg";
  import CloseSvg from "../assets/Close.svg";
  export let position, progress, duration, messages, customIcon;

  let hidden = false;
  const positioning = {
    "top-left": "top-5 left-5",
    "top-right": "top-5 right-5",
    "bottom-left": "bottom-5 left-5",
    "bottom-right": "bottom-5 right-5",
    "t-l": "top-5 left-5",
    "t-r": "top-5 right-5",
    "b-l": "bottom-5 left-5",
    "b-r": "bottom-5 right-5",
  };
  let time = 0;

</script>

<div class="toast {hidden ? 'hidden':'absolute'} {positioning[position]}">
  <div class="icon">
    <SuccesSvg />
  </div>
  <div class="messages">{messages}</div>
  <button on:click={()=>{hidden=true}} type="button" class="button">
    <span class="sr-only">Close</span>
    <CloseSvg />
  </button>
  {#if progress}
  <div class="progress">
    <div class="bar bg-green-600" style="width: {time}%" />
  </div>
  {/if}
</div>
