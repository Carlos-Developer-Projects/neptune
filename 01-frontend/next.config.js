module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

        config.plugins.push(new webpack.IgnorePlugin({
            resourceRegExp: /^electron$/
        }))

        return config
    }
}
