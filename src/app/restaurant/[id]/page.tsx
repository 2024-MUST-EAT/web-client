import React from "react";

enum CategoryName {
  "i" = "양식",
}

const page = () => {
  const { categoryId } = restaurant;
  return (
    <section className="bg-zinc1 p-4 rounded">
      <div>
        <p>{restaurant.name}</p>
        <p>{restaurant.address}</p>
        {CategoryName[categoryId as keyof typeof CategoryName]}
        <div>
          {restaurant.menus.map((menu, idx) => (
            <p key={idx}>{menu}</p>
          ))}
        </div>
        <p className="text-skyBlue2 underline">{restaurant.homepage}</p>
        <p>{restaurant.phone}</p>
      </div>
    </section>
  );
};

export default page;

const restaurant = {
  id: 1,
  name: "새로운 맛집",
  categoryId: "i",
  kakaoId: "new_restaurant",
  address: "서울시 강남구 역삼동 543-21",
  latitude: 37.12345,
  longitude: 127.54321,
  menus: ["짜장면", "탕수육"],
  images: [
    "https://example-restaurant.com/image1.jpg",
    "https://example-restaurant.com/image2.jpg",
  ],
  homepage: "https://newrestaurant.com",
  phone: "02-1234-5678",
};
