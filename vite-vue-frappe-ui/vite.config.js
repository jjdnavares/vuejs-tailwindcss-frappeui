import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
// import frappeui from 'frappe-ui'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
		// frappeui({
		// 	frappeProxy: true,
		// 	lucideIcons: true,
		// 	jinjaBootData: true,
		// 	buildConfig: false,
		// }),
		vue(),
    tailwindcss()
  ],
})
