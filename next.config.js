/** @type {import('next').NextConfig} */

//const isProd = process.env.NODE_ENV === 'production'
const debug = process.env.NODE_ENV !== 'production'
const repository = 'monofactory-react'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : '', // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  // images: {
  //   loader: 'akamai',
  //   path: '',
  // },
  // assetPrefix: isProd ? '/monofactory-react/' : '',
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
  //     ? 'https://monofactory.github.io/monofactory-react/'
  //     : '',
}

module.exports = nextConfig
