import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealList/MealsList";

function FavouriteScreen() {
  const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsIds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View>
        <Text>You have no favorites yet.</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
}

export default FavouriteScreen;
