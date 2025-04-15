/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}', // ตรวจสอบไฟล์ในโฟลเดอร์ components
    './app/**/*.{js,ts,jsx,tsx}',       // ตรวจสอบไฟล์ในโฟลเดอร์ app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
