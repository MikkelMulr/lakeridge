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
		padding: 20px 2.5vw;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.copy,
	.link {
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		color: #383838;
		font-size: 1.5rem;
	}

	@media only screen and (max-width: 40em) {
		.copy,
		.link {
			font-size: 12px;
		}
	}
</style>
