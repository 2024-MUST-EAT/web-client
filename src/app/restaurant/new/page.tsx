import Input from "@/components/atoms/Input";
import React from "react";

const NewRestaurant = () => {
  return (
    <div className="h-full">
      <div className="py-4">
        <p className="flex justify-center text-2xl font-semibold">
          가게 등록하기
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div
          id="ripped"
          className="bg-white p-4 w-9/12 max-w-[500px] shadow-rgba1 rounded-lg"
        >
          <Input placeholder="지점명까지 적어주면 좋아요!" />
        </div>
      </div>
    </div>
  );
};

export default NewRestaurant;
