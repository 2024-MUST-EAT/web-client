"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IconRight from "@/assets/icons/arrow_right.svg";

interface Props {
  title: string;
  content: string;
}

const EmptyContent = ({ title, content }: Props) => {
  return (
    <div className="relative">
      <Link href={"restaurant/new"}>
        <motion.aside
          whileHover={{
            backgroundColor: "#D0D9D680",
            scale: 1.02,
            color: "#27272A",
          }}
          transition={{ duration: 0.2 }}
          className="flex items-center justity-between mt-10 mb-2 mx-10 rounded-xl p-10 bg-extraLightGreen2 font-semibold text-zinc6 cursor-pointer"
        >
          <div className="mr-auto">
            <h1 className="text-h2">{title}</h1>
            <small>{content}</small>
          </div>
          <IconRight />
        </motion.aside>
      </Link>
      <div className="flex flex-col gap-2">
        {[6, 5, 3, 1].map((el) => (
          <motion.div
            initial={{ opacity: `0.${el}` }}
            key={el}
            className={
              "sticky mx-10 rounded-xl h-40 bg-zinc2 font-semibold text-zinc6"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default EmptyContent;
