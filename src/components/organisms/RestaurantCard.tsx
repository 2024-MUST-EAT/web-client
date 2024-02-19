import Image from "next/image";
import React from "react";
import ImgPlaceholder from "@/assets/images/placeholder.png";
import IconCopy from "@/assets/icons/copy.svg";
import { Restaurant } from "@/types/Restaurant";
import Link from "next/link";

interface Props {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: Props) => {
  const { address, category, id, image, menus, name } = restaurant;
  return (
    <Link href={`/restaurant/${id}`}>
      <article className="bg-white p-2 shadow-rgba1 rounded-xl max-w-80 hover:shadow-rgba3 hover:-translate-y-1 trasform-all duration-300 cursor-pointer">
        <div className="rounded-lg bg-zinc1 overflow-hidden">
          {/* TODO: next.config에 image hostname 적용 필요 */}
          <Image
            src={ImgPlaceholder}
            alt=""
            width={250}
            height={180}
            className="w-[250px] h-[180px] object-cover"
            quality={100}
          />
        </div>
        <div className="px-2">
          <div className="flex items-end justify-between border-b pt-4 pb-1">
            <p className="text-xl">{name}</p>
            <p className="text-sm text-zinc4">{category}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm text-zinc6 py-2">{address}</p>
            <IconCopy />
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-zinc1 p-3 rounded-lg">
          <p className="uppercase text-xs text-zinc6 font-semibold">menu</p>
          {/* 메뉴 */}
          <div className="flex gap-2">
            {menus.map((menu) => (
              <div
                key={menu}
                className="flex-1 text-center text-xs bg-white rounded-xl p-2"
              >
                {menu}
              </div>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default RestaurantCard;
