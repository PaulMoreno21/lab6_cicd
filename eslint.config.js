export default[
{
    files: ['**/*.js'],
    languageOptions:{
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules:{
        semi: ['error', 'alwayrs'],
        quotes: ['error','single']
    }
}
];