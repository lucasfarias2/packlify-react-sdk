export default function tailwindTemplate() {
  return `/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
      theme: {},
    };
  `;
}
