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
			'I am currently working for Beamex with a group of 7 other students. Our task is to build an application for Android-based glasses with React Native and TypeScript.',
		date: '2022 September - 2023 April',
		src: '/skills/react-native_logo.png',
		alt: 'React Native logo',
		href: '/projects/beamex',
		isPrivate: true
	},
	{
		title: 'This website',
		/* TODO: Update how many days this took when it is "ready" */
		description: 'I built this website in 5 days using SvelteKit, TypeScript and TailwindCSS.',
		date: '2023 February',
		src: '/skills/svelte_logo.png',
		alt: 'Svelte logo',
		href: '/projects/website-portfolio',
		isPrivate: false
	},
	{
		title: 'Tower Defense game with C++',
		description:
			'I was in a team of 4 people and we built a Tower Defense game in C++ using the SFML library.',
		date: '2021 September - 2021 December',
		src: '/skills/cpp_logo.png',
		alt: 'C++ logo',
		href: '/projects/cpp-towerdefense',
		isPrivate: true
	},
	{
		title: 'Regression visualizer with Scala',
		description:
			'As a part of a programming course, I built an app with Scala that lets the user read data and plot linear or exponential regression.',
		date: '???',
		src: '/skills/scala_logo.png',
		alt: 'Scala logo',
		href: '/projects/scala-regression',
		isPrivate: false
	},
	{
		title: 'A text-based adventure game with Scala',
		description:
			'I worked together with a friend to build a text-based adventure game in Scala. We used the ScalaFX library to build the GUI.',
		date: '???',
		src: '/skills/scala_logo.png',
		alt: 'Scala logo',
		href: '/projects/scala-regression',
		isPrivate: false
	},
	{
		title: 'Discord bot with Python',
		description:
			'I built a simple Discord bot for moderation commands, but quickly it got more popular and I kept adding more features.',
		date: '2017 - 2018',
		src: '/skills/python_logo.png',
		alt: 'Python logo',
		href: '/projects/discord-bot',
		isPrivate: false
	}
];
