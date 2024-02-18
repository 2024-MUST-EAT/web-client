import Header from "@/components/organisms/Header";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const RestaurantLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="px-6 py-4">{children}</div>
    </>
  );
};

export default RestaurantLayout;
