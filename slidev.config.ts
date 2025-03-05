import { defineConfig } from '@slidev/cli'

export default defineConfig({
  // Opciones de presentación
  title: '01234 - Base de Conocimiento',
  titleTemplate: '%s - 01234',
  author: 'Sergio Forés',
  description: 'Una presentación sobre el sistema 01234',
  
  // Opciones de tema
  theme: 'seriph',
  
  // Opciones de estilo
  css: 'style.css',
  
  // Opciones de resaltado de código
  highlighter: 'shiki',
  
  // Opciones de transición
  transition: 'slide-left',
  
  // Opciones de exportación
  exportFilename: '01234-presentacion',
  
  // Opciones de favicon
  favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png',
  
  // Opciones de fuentes
  fonts: {
    sans: 'Montserrat, Roboto, sans-serif',
    serif: 'Roboto Slab, serif',
    mono: 'Fira Code, monospace',
  },
  
  // Opciones de dibujo
  drawings: {
    enabled: true,
    persist: false,
    presenterOnly: false,
    syncAll: true,
  },
})
