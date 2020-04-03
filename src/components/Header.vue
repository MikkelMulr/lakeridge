<template>
	<header class="Header">
		<router-link :to="{name: 'Home', props: { } }">
			<img class="logo" src="../assets/images/lakeridge_logo.svg" alt="Logo" />
		</router-link>
		<nav>
			<ul>
				<li>
					<router-link :to="{name: 'Home', props: { } }">Home</router-link>
				</li>
				<li>
					<router-link :to="{name: 'Browse', props: { } }">Browse Myths</router-link>
				</li>
				<li>
					<router-link :to="{name: 'Resources', props: { } }">Resources</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		name: "Header",
		props: {}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Header {
		padding: 20px 2.5vw;
		display: flex;
		flex-direction: row;
	}

	.logo {
		height: 60px;
		width: auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	nav {
		margin-left: auto;
	}

	nav ul {
		height: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	li {
		list-style: none;
		display: inline-block;
		text-decoration: none;
	}

	nav a,
	:visited {
		padding: 3px 8px;
		color: #383838;
		font-size: 24px;
		font-weight: 600;
		text-decoration: none;
		border-radius: 5px;
		transition: 0.25s;
		font-family: 'Poppins', sans-serif;
	}

	nav a:hover {
		background-color: #d6eaf8;
		color: #383838;
	}

	@media only screen and (max-width: 40em) {
		.Header {
			flex-direction: column;
		}

		.logo {
			height: 40px;
			padding-left: 10px;
		}

		nav {
			padding-top: 20px;
			margin: auto;
		}

		nav a,
		:visited {
			font-size: 16px;
		}
	}
</style>
