module.exports = {
  env: {
    test: {
      plugins: [[require.resolve('@babel/plugin-transform-modules-commonjs'), { loose: true }]],
    },
  },
  ignore: ['src/@types/*'],
  plugins: [
    require.resolve('babel-plugin-dynamic-import-node'),
  ],
  presets: [
        [
          require.resolve('@babel/preset-env'),
          {
            modules: 'commonjs',
          },
        ],
        require.resolve('@babel/preset-react'),
        require.resolve('@babel/preset-typescript')
      ],

};
