import Header from "@/components/organisms/Header";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const RestaurantLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default RestaurantLayout;
