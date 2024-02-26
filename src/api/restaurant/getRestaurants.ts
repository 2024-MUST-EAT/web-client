import Restaurants from "@/types/Restaurant";

const endpoint = "/restaurants";

const getRestaurants = async () => {
  const restaurants: Restaurants = await fetch(
    `${process.env.BASE_URL}${endpoint}`,
  ).then((res) => res.json());

  return restaurants;
};

export default getRestaurants;
