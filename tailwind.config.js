/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/CategoryGridTile.tsx",
    "./components/MealItem.tsx",
    "./screens/MealsOverviewScreen.tsx",
    "./screens/CateogriesScreen.tsx",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
