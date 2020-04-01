<template>
	<footer>
		<p class="copy">2020 &copy; Lakeridge Health, Oshawa</p>
		<a class="link" href="https://www.lakeridgehealth.on.ca/en/ourservices/Cancer-Clinical-Trials-.asp" target="_blank">Visit Lakeridge Health</a>
	</footer>
</template>

<script>
	export default {
		name: "Footer",
		props: {}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer {
		padding: 20px 35px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.copy,
	.link {
		color: #f5f5f5;
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>
