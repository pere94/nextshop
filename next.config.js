// /** @type {import('next').NextConfig} */ 

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space','placeimg.com','www.facebook.com'],
  },
  experimental: { 
    images: { allowFutureImage: true } },
}

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['api.lorem.space'],
//   } 
// }

// export default nextConfig
