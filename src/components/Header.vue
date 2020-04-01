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
		padding: 20px 30px;
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
		font-size: 2.5rem;
	}

	nav ul {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	li {
		list-style: none;
		display: inline-block;
		margin: 0 10px;
		text-decoration: none;
	}

	a,
	:visited {
		padding: 2px 5px;
		color: #f5f5f5;
		font-weight: 600;
		text-decoration: none;
		border-radius: 5px;
		transition: 0.25s;
	}

	nav a:hover {
		background-color: #d6eaf8;
		color: #383838;
	}
</style>
