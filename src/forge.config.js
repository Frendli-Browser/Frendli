module.exports = {
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'frendli-browser',
                    name: 'frendli',
                },
                prerelease: false,
                draft: true,
            },
        },
    ],
}