<script>
    export let color = 'blue';
</script>

<button class="bg-{color}-500 hover:bg-{color}-700 text-white font-bold py-2 px-4 rounded">
    <slot></slot>
</button>