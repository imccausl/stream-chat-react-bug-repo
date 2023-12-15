module.exports = {
  env: {
    test: {
      plugins: [['@babel/plugin-transform-modules-commonjs', { loose: true }]],
    },
  },
  ignore: ['src/@types/*'],
  plugins: [
    'babel-plugin-dynamic-import-node',
  ],
  presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
          },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript'
      ],

};
