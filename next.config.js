/** @type {import('next').NextConfig} */

//const isProd = process.env.NODE_ENV === 'production'
const debug = process.env.NODE_ENV !== 'production'
const repository = 'mono-react'

const nextConfig = {
  reactStrictMode: true,
  basePath: `/${repository}`,
  images: {
    loader: 'akamai',
    path: '/',
  },
  assetPrefix: !debug ? `/${repository}/` : '', // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  // images: {
  //   loader: 'akamai',
  //   path: '',
  // },
  // assetPrefix: isProd ? '/mono-react/' : '',
  // images: {
  //   unoptimized: true,
  // },
  // assetPrefix: './',
  // images: {
  //   loader: 'akamai',
  //   path: '/',
  // },
  // assetPrefix:
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://monofactory.github.io/mono-react/'
  //     : '',
}

module.exports = nextConfig
