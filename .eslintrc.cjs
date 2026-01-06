module.exports = {
	root: true,
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				extraFileExtensions: ['.svelte'],
				parser: {
					js: '@typescript-eslint/parser',
					ts: '@typescript-eslint/parser'
				}
			},
			extends: ['plugin:svelte/recommended'],
			plugins: ['svelte']
		},
		{
			files: ['*.ts', '*.js'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 'latest'
			},
			extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
			plugins: ['@typescript-eslint']
		}
	],
	env: {
		browser: true,
		node: true
	}
};
