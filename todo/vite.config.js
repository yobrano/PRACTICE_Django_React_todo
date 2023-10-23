import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/ config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: "@public-root", replacement: path.resolve(__dirname, "./public") },
			{ find: "@src-root", replacement: path.resolve(__dirname, "./src") },
			{ find: "@src-components", replacement: path.resolve(__dirname, "./src/components") },
			{ find: "@src-views", replacement: path.resolve(__dirname, "./src/views") },
			{ find: "@src-assets", replacement: path.resolve(__dirname, "./src/assets") },
			{ find: "@src-context", replacement: path.resolve(__dirname, "./src/context") },
			{ find: "@src-styles", replacement: path.resolve(__dirname, "./src/assets/styles") },
			{ find: "@src-logo", replacement: path.resolve(__dirname, "./src/assets/logo") },
			{ find: "@src-utils", replacement: path.resolve(__dirname, "./src/utils") },
		],
	},
	base: "./",
	server: { port: 3000 }
})
