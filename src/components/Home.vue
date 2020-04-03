<template>
	<main id="home">
		<section class="intro">
			<p>Over the years, many myths have evolved about what clinical trials are, who can participate in it and how it affects people who have already taken part in it.</p>
			<p>At Lakeridge Health, we believe the sooner we dispel the myths, the better we’ll be able to respond to the reality and help people.</p>
			<span>* This message will disappear automatically.</span>
		</section>
		
		<section class="home-headings">
			<p>Know the facts behind<br>the common myths of</p>
			<h1>Clinical Trials</h1>
		</section>

		<section class="play">
			<router-link class="playButton button" :to="{name: 'GameBox', props: { } }">Let's Go</router-link>
			<span>This will show one myth at a time. Click <strong>"Browse"</strong> to see all myths.</span>
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
		position: relative;
		min-height: 82vh;
		width: 95vw;
		margin: 0 auto;
		background: #f5f5f5;
		border: 1px solid #e5e5e5;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.intro {
		opacity: 1;
		position: absolute;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		border-radius: 10px;
		border: 1px solid #e5e5e5;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		animation: hideSection 1s forwards ease-in-out 11s;
	}

	@keyframes hideSection {
		to {
			opacity: 0;
			top: 100%;
		}
	}

	span {
		font-style: italic;
		font-family: "Poppins", sans-serif;
		font-size: 14px;
		font-weight: 400;
	}

	.intro span {
		width: 50%;
		margin: 20px auto;
		padding-left: 30px;
		animation: hidePara 0.5s forwards ease-in-out 10.25s;
	}

	.intro p {
		opacity: 1;
		font-size: 30px;
		font-weight: 600;
		font-family: 'Poppins', sans-serif;
		width: 50%;
		padding: 30px;
		color: #383838;
		border-left: 10px solid #555;
	}

	@keyframes hidePara {
		to {
			opacity: 0;
		}
	}

	.intro p:nth-of-type(1) {
		padding-top: 0;
		animation: hidePara 0.5s forwards ease-in-out 10s;
	}
	
	.intro p:nth-of-type(2) {
		padding-bottom: 0;
		animation: hidePara 0.5s forwards ease-in-out 10.25s;
	}

	.home-headings {
		width: 50%;
		text-align: center;
	}

	.home-headings h1 { 
		font-size: 120px;
		font-family: "Raleway", sans-serif;
		font-weight: 900;
		font-style: italic;
		padding: 20px;
	}

	.home-headings p {
		font-family: 'Poppins', sans-serif;
		font-size: 44px;
		font-weight: 400;
		border-left: 10px solid #383838;
	}

	.play {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.playButton {
		display: inline-block;
		margin: 10px auto;
		padding: 2rem 15rem;
		color: #fff;
		background-color: #27AAE1;
		border-radius: 10px;
		font-size: 44px;
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
		text-decoration: none;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		transition: 0.25s;
	}

	.playButton:hover {
		box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
	}

	@media only screen and (max-width: 64em) {
		.intro p,
		.intro span {
			width: 100%;
		}

		.home-headings {
			width: 80%;
		}
	}

	@media only screen and (max-width: 40em) {
		#home {
			min-height: 73vh;
		}

		.intro p {
			width: 100%;
			font-size: 16px;
		}
		
		.intro span {
			font-size: 12px;
		}

		.home-headings {
			width: 100%;
		}

		.home-headings p {
			font-size: 22px;
		}

		.home-headings h1 {
			font-size: 45px;
		}

		.playButton {
			padding: 1rem 6rem;
		}

		.play {
			width: 90%;
		}
	}
</style>

