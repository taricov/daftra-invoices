import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {	
      translate: {
      200: '200%',
    },},
  },
  plugins: [],
} satisfies Config;
