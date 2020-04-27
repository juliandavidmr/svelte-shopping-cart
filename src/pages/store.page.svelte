<script>
    import { productList } from "../services/products";
    import ProductComponent from "../components/product.component.svelte";
</script>

<div class="flex items-center flex-wrap pt-4 pb-12">
    {#each productList as product}
        <ProductComponent {...product}></ProductComponent>
    {/each}
</div>