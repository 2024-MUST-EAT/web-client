import React from "react";
import RestaurantCard from "../organisms/RestaurantCard";

const Restaurants = () => {
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

const restaurants = {
  count: 1,
  results: [
    {
      id: 1,
      name: "맛있는 식당",
      category: "한식",
      address: "서울시 강남구 역삼동 123-45",
      menus: ["된장찌개", "불고기"],
      image: "https://example-restaurant.com/thumbnail1.jpg",
    },
  ],
};
