import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://juanvelasco03.github.io/Juego-kuepa/",
  plugins: [react()]
})
