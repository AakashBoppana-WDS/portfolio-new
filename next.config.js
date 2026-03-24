/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // makes next export work
    images: { unoptimized: true }, // optional if you use images
}

module.exports = nextConfig