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
			'I am currently working in a 7 member team for Beamex. Our task is to build an application for Android-based glasses with React Native and TypeScript.',
		date: '2022 September - 2023 April',
		src: '/skills/react-native_logo.png',
		alt: 'React Native logo',
		href: '/projects/beamex',
		isPrivate: true
	},
	{
		title: 'Test example',
		description: 'Click this for unexpected results.',
		date: '???',
		src: '/skills/react-native_logo.png',
		alt: 'React Native logo',
		href: '/projects/test',
		isPrivate: false
	}
];
