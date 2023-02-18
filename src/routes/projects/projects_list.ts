export interface Project {
	title: string;
	description: string;
	date: string;
	src: string;
	alt: string;
	href: string;
	isPrivate: boolean;
}

export const projects = [
	{
		title: 'Software project at Beamex',
		description:
			'Working in a group of 7 CS students, our task is to build a calibration helper application for Android-based glasses with React Native and TypeScript. (Still ongoing)',
		date: '2022 September - 2023 April',
		src: '/skills/react-native_logo.png',
		alt: 'React Native logo',
		href: '/projects/beamex',
		isPrivate: true
	},
	{
		title: 'This website',
		/* TODO: Update how many days this took when it is "ready" */
		description:
			'This website was built in just 6 days using SvelteKit, TypeScript and TailwindCSS. Note that I had no prior experience with Svelte or TailwindCSS before starting this project.',
		date: '2023 February',
		src: '/skills/svelte_logo.png',
		alt: 'Svelte logo',
		href: 'https://github.com/matiasso/matiasso.github.io',
		isPrivate: false
	},
	{
		title: 'TicTacToe game with Scala',
		description:
			'A simple TicTacToe game written in Scala using the ScalaFX library. The game has an AI that uses the minimax algorithm with 3 unique difficulties. It also includes 2-player mode.',
		date: '2021 December',
		src: '/skills/scala_logo.png',
		alt: 'Scala logo',
		href: 'https://github.com/matiasso/TicTacToe',
		isPrivate: false
	},
	{
		title: 'Tower Defense game with C++',
		description:
			'As a team of 4 people we built a Tower Defense game in C++ using the SFML library. There are different levels which vary in difficulty and the game has a highscore system.',
		date: '2021 September - 2021 December',
		src: '/skills/cpp_logo.png',
		alt: 'C++ logo',
		href: '/projects/cpp-towerdefense',
		isPrivate: true
	},
	{
		title: 'Regression visualizer with Scala',
		description:
			"A part of a programming course. The app was built with ScalaFX. It lets the user read data and plot linear or exponential regression. There's also a bunch of customization features for the plot. And most importantly there is a dark mode toggle.",
		date: '2021 March - 2021 May',
		src: '/skills/scala_logo.png',
		alt: 'Scala logo',
		href: 'https://github.com/matiasso/regression_visualizer',
		isPrivate: false
	},
	{
		title: 'Text-based adventure game with Scala',
		description:
			"Worked as a pair with a friend from Aalto University. The game was text-based adventure game in Scala. We used the ScalaFX library to build the GUI, but wanted to keep the app UI as close to the terminal as possible. That's why we only used ASCII art. We ended up winning a prize for it since the teaching staff liked it so much.	",
		date: '2020 November - 2020 December',
		src: '/skills/scala_logo.png',
		alt: 'Scala logo',
		href: '/projects/text-adventure-game',
		isPrivate: false
	},
	{
		title: 'Party game with Java (Android only)',
		description:
			'A party game built with Java and Android Studio. The game visualizes and simulates a regular deck of cards. All the card rules are customizable.',
		date: '2019 - 2020',
		src: '/skills/java_logo.png',
		alt: 'Java logo',
		href: 'https://github.com/matiasso/juomapeli_android',
		isPrivate: false
	},
	{
		title: 'Discord bot with Python',
		description:
			'I built a simple Discord bot for moderation commands, but it quickly got more popular and I kept adding more features.',
		date: '2017 - 2018',
		src: '/skills/python_logo.png',
		alt: 'Python logo',
		href: '/projects/discord-bot',
		isPrivate: true
	},
	{
		title: 'Image resizer for Windows',
		description:
			'Built a simple image resizer with a GUI. It was built with C# using Visual Studio. The app lets you select multiple images at once, and choose the desired resolution in either absolute pixels or relative percentages. The GUI shows a realtime progressbar and thumbnails of the images that are currently being handled.',
		date: '2017',
		src: '/skills/csharp_logo.svg',
		alt: 'CSharp logo',
		href: '/projects/imageresizer',
		isPrivate: true
	}
];
