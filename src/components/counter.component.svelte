<script>
  import { createEventDispatcher } from "svelte";

  let counterValue = 0;

  const dispatchCounterChange = createEventDispatcher();

  function decrement() {
    if (counterValue > 0) {
      counterValue--;
      dispatchCounterChange("counterChange", counterValue);
    }
  }

  function increment() {
    if (counterValue < 1000) {
      counterValue++;
      dispatchCounterChange("counterChange", counterValue);
    }
  }
</script>

<style>
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .number-input input:focus {
    outline: none !important;
  }

  .number-input button:focus {
    outline: none !important;
  }

  .border-0 {
    border: 0;
  }
</style>

<div class="number-input h-10 w-32">
  <div
    class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
    <button
      on:click={decrement}
      aria-label="Remover un elemento"
      class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400
      h-full w-20 rounded-l cursor-pointer outline-none border-0">
      <span class="m-auto text-2xl font-thin">−</span>
    </button>
    <input
      type="number"
      class="outline-none focus:outline-none text-center w-full bg-gray-300
      font-semibold text-md hover:text-black focus:text-black
      md:text-basecursor-default flex items-center text-gray-700 outline-none
      border-0"
      name="countername"
      readonly
      min="0"
      max="999"
      value={counterValue} />
    <button
      on:click={increment}
      aria-label="Añadir un elemento"
      class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400
      h-full w-20 rounded-r cursor-pointer add-button border-0">
      <span class="m-auto text-2xl font-thin">+</span>
    </button>
  </div>
</div>
