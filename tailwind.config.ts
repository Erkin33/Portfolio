import type { Config } from "tailwindcss";

export default {
  darkMode: "class",                // хотим переключать классом .dark
  content: ["./src/**/*.{ts,tsx}"], // путь к твоим файлам
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
