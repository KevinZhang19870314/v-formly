module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // presets: [
  //   [
  //     "@vue/cli-plugin-babel/preset",
  //     {
  //       useBuiltIns: false,
  //     },
  //   ],
  // ],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true },
    ],
  ],
};
