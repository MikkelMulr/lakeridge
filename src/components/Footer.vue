<template>
	<footer>
		<section class="copy">LakeRidge Health &copy; 2019</section>
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
	.copy {
		color: #f5f5f5;
		height: 5vh;
		font-size: 1.5rem;
		padding: 0.5rem 0 0.5rem 0;
		text-align: right;
		margin-right: 4rem;
		/* overflow: none; */
	}

	/* .hex {
																						margin-left: -10rem;
																						margin-top: 32rem;
																						width: 20rem;
																						height: 20rem;
																						background: rgba(255, 255, 255, 0.308);
																						clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
																					} */
</style>
