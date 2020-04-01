<template>
	<main id="home">
		<section class="home-headings">
			<p>Know the facts behind<br>the common myths of</p>
			<h1>Clinical Trials</h1>
		</section>

		<section class="play">
			<router-link class="playButton button" :to="{name: 'GameBox', props: { } }">Let's Go</router-link>
		</section>
	</main>
</template>

<script>
	export default {
		name: "Home",
		props: {},
		components: {}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#home {
		min-height: 83vh;
		width: 95vw;
		margin: 0 auto;
		background: #f5f5f5;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.home-headings {
		text-align: center;
	}

	h1 {
		align-items: center;
		font-size: 8rem;
		font-weight: 400;
		margin: 3rem;
	}

	p {
		font-size: 4rem;
		font-weight: 400;
		box-shadow: inset 10px 0 0 #383838,
					inset -10px 0 0 #383838;
	}

	.playButton {
		display: inline-block;
		margin: 20px auto;
		padding: 2rem 15rem;
		color: #fff;
		background-color: #00baff;
		border-radius: 10px;
		font-size: 5rem;
		font-weight: 700;
		text-decoration: none;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		transition: 0.25s;
	}

	.playButton:hover {
		box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
	}
</style>

