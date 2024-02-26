import React from "react";
import getRestaurants from "@/api/restaurant/getRestaurants";
import RestaurantCard from "../organisms/RestaurantCard";
import EmptyContent from "./EmptyContent";

const Restaurants = async () => {
  const restaurants = await getRestaurants();

  if (restaurants.results.length === 0)
    return (
      <EmptyContent
        title="가게 등록하기"
        content={`아직 등록된 맛집이 없어요.
가장 먼저 나만의 맛집을 등록해보세요!`}
      />
    );

  return (
    <section className="flex justify-center mx-auto">
      <div className="grid grid-cols-3 px-8 py-6 gap-4 max-sm:grid-cols-1">
        {restaurants.results.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
