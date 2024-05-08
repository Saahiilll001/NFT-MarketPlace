// /**@type {import("next").NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ["gateway.pinata.cloud"],
//     formats: ["image/webp"],
//   },
// };
/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["gateway.pinata.cloud"],
    formats: ["image/webp"],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g|mp4|mov|webm)$/i,
      loader: 'file-loader',
      options: {
        publicPath: '/_next',
        name: 'static/media/[name].[hash].[ext]',
      },
    });
    return config;
  },
};
