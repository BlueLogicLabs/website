/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://windi-docs.imgix.net/",
  },
}

module.exports = nextConfig
