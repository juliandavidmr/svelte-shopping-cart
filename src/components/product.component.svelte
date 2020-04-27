<script>
  import CounterSvelte from "./counter.component.svelte";

  export let name;
  export let price;
  export let image;
  export let count = 0;
  export let addedShoppingCart = false;

  let totalPrice = 0;

  function addProduct() {
    addedShoppingCart = true;
  }

  function counterChangeFn({ detail }) {
    count = detail;
    totalPrice = getTotalPrice();
  }

  function getTotalPrice() {
    return (price * count).toFixed(2);
  }
</script>

<style>
  .total {
    border-bottom: 1px solid #4fd1c5;
  }
</style>

<div class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" role="article">
  <img class="hover:grow hover:shadow-lg" src={image} alt={name} />
  <div class="pt-3 flex items-center justify-between">
    <strong>{name}</strong>
    <CounterSvelte on:counterChange={counterChangeFn} />
  </div>
  <div class="pt-3 flex items-center justify-between">
    <p class="pt-1 text-gray-900">${price} c/u</p>
    {#if count > 0}
      <p class="pt-1 text-gray-900 total" title="{count} de '{name}'">Total ${totalPrice}</p>
    {/if}
  </div>
</div>
