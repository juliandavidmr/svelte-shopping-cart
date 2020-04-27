<script>
	import NavComponent from "./components/navbar.component.svelte";
	import ButtonComponent from "./components/button.component.svelte";
	import ContainerComponent from "./components/container.component.svelte";
	import StoreComponent from "./pages/store.page.svelte";
	export let name;
</script>

<svelte:head>
	<link rel="stylesheet" href="/tailwind.min.css">
	<title>App store</title>
    <meta name="description" content="Free open source Tailwind CSS Store template">
    <meta name="keywords" content="tailwind,tailwindcss,tailwind css,css,starter template,free template,store template, shop layout, minimal, monochrome, minimalistic, theme, nordic">
</svelte:head>

<main>
	<NavComponent></NavComponent>
	<ContainerComponent>
		<StoreComponent></StoreComponent>
	</ContainerComponent>
</main>

<style>
	main {
		padding: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>