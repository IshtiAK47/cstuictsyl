import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#17211d', muted: '#718078', line: '#e7ece8', brand: { DEFAULT: '#16845b', dark: '#106344', soft: '#e8f5ee' } }, boxShadow: { soft: '0 8px 30px rgba(20,50,35,.06)' } } }, plugins: [] };
export default config;
