<nav>
	<a href="/">Home</a>
	<a href="/about">About me</a>
	<a href="/skills">Skills</a>
	<a href="/projects">Projects</a>
</nav>

<slot />

<style>
	:global(body) {
		margin: 0;
	}
	:global(p) {
		color: #fff;
		font-family: 'Roboto', sans-serif;
		font-size: larger;
		word-spacing: 0.1rem;
		line-height: 1.5rem;
	}
	nav {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 5vh;
		background: #0ea2f6;
	}
	nav a {
		color: #000;
		font-size: 1.4rem;
		margin-right: 2rem;
		text-decoration: none;
	}
	nav a:hover {
		color: #f00;
		box-shadow: inset 0 -2px 0 0 #f00;
	}
</style>
