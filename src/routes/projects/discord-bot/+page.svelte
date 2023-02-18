<script lang="ts">
	import Dialog from '../../../components/dialog.svelte';
	import ProjectGrid from '../projectgrid.svelte';

	const projectProps = {
		title: 'Discord bot written in Python',
		date: '2017-2018',
		logo: '/projects/discord-bot/discordbot.jpeg',
		alt: 'A picture of a doge with sunglasses'
	};
	const imgCount = [1, 2, 3, 4];
</script>

<!-- Return a floating dialog with information about the project -->

<Dialog>
	<ProjectGrid {...projectProps}>
		<p class="text-black dark:text-white leading-relaxed">
			Before University I learned how to program in Python with the help of online tutorials. I
			decided to create a Discord bot, which would help me and my friends moderate our servers. The
			bot was originally meant only for moderation commands (such as kicking users, deleting
			messages from someone or for a certain period of time, etc.) but I quickly got more ideas what
			the bot could do. This is where I initially realized the power of programming.
			<br /><br />
			After some time the bot became more popular than I ever expected, and I started to get requests
			for new features from strangers who had found my bot and wanted to use it on their servers. I was
			happy to help, and I started to add new features to the bot.
			<br /><br />
			After months the bot had dozens of commands, and some minigames that people could play. Some examples
			of the minigames include TicTacToe, Connect-Four, Typeracer (where you type a given text as fast
			as you can, and compete against others) and different kind of trivia games where the bot pulled
			trivia questions from a free online API and the users could answer by typing the option number
			in the chat. The bot got added into more than 30k servers, and it had over 1.1 mil unique users
			across all the servers. At the end I also got an online friend to join the project and help me
			with the development.
			<br /><br />
			The project ended when Discord changed their developer terms, so that all developers who had a
			bot in over 100 servers had to verify their account and identity. I was not willing to do this,
			so I decided to shut the bot down and focus on different projects.
			<br /><br />
			Here are some screenshots of the bot:
		</p>
		<div class="flex flex-row flex-wrap justify-center">
			{#each imgCount as imgIndex}
				<img
					src="/projects/discord-bot/discordbot_ss{imgIndex}.png"
					alt="A screenshot of the discord bot commands"
					class="w-3/4 my-4 object-contain rounded-lg "
					width="500"
					height="500"
				/>
			{/each}
		</div>
	</ProjectGrid>
</Dialog>
