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
	nav {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 5vh;
		background: rgba(50, 28, 157, 0.632);
	}
	nav a {
		color: #fff;
		padding-right: 2rem;
		text-decoration: none;
	}
	nav a:hover {
		color: #f00;
	}
</style>
