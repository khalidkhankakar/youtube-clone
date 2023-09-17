/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: true
    },
    images:{
        domains: ["i.ytimg.com","yt3.ggpht.com"]
    }
}

module.exports = nextConfig
