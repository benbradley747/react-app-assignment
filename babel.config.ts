module.exports = function (api: { cache: (arg0: boolean) => void }) {
  api.cache(true)

  const presets = []
  const plugins = [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ]
  return {
    presets,
    plugins,
  }
}
