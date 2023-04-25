/** @type {import('next').NextConfig} */
const path = require("path")
const nextConfig = {
	reactStrictMode: false,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "moza.comtech.com.bo",
				port: "",
				pathname: "/uploads/**",
			},
			{
				protocol: "https",
				hostname: "admin.visionmoderna.net",
				port: "",
				pathname: "/uploads/**",
			},
		],
	},
}

module.exports = nextConfig
