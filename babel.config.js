module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }],
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@assets': './src/assets',
            '@contexts': './src/contexts',
            '@hooks': './src/hooks',
            '@providers': './src/providers',
            '@libs': './src/libs',
          },
        },
      ],
    ],
  };
};
