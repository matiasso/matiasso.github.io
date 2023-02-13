<nav>
    <a href="/">Home</a>
    <a href="/about">About me</a>
    <a href="/skills">Skills</a>
</nav>

<style>
    nav {
        display: flex;
        justify-content: flex-end;
        padding: 1rem;
        background: #eee;
    }
    nav a {
        color: #333;
        padding-left: 2rem;
        text-decoration: none;
    }   
    nav a:hover {
        color: #f00;
    }
</style>

<slot></slot>