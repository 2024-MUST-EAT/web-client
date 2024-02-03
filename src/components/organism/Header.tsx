import Link from "next/link";
import IconPlus from "@/assets/plus.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-4 bg-white dark:bg-zinc-800 text-xs shadow-md">
      <p className="text-xl font-semibold text-green dark:text-neonGreen">
        머스트잇
      </p>
      <Link
        href="#"
        className="flex items-center gap-2 text-md bg-extraLightGreen text-zinc8 dark:text-white px-3 py-2 border border-white rounded-lg shadow-md hover:shadow-lg hover:bg-extraLightGreen2 transform-all duration-200 dark:bg-green dark:shadow-[#f9f9f920] dark:hover:shadow-[#f9f9f940] dark:hover:bg-lightGreen"
      >
        <IconPlus width={10} height={10} />
        <p className="font-bold">가게 등록</p>
      </Link>
    </div>
  );
};

export default Header;
