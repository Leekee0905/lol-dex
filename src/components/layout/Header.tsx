// "use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { MdModeNight } from "react-icons/md";

const Header = () => {
  // const [mounted, setMounted] = useState<boolean>(false);
  // const { theme, setTheme } = useTheme();
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }
  return (
    <header className="bg-gray-800 text-white py-4 px-10 fixed top-0 w-full z-10">
      <nav className="flex justify-between items-center">
        <Link href={"/"} className="flex items-center justify-center">
          <Image
            src={"/assets/logo.png"}
            width={50}
            height={50}
            alt="홈 로고"
          />
          <p>롤 백과사전</p>
        </Link>
        <ul className="flex justify-end items-center gap-10">
          <li>
            <Link href={"/rotation"}>로테이션</Link>
          </li>
          <li>
            <Link href={"/champions"}>챔피언 목록</Link>
          </li>
          <li>
            <Link href={"/items"}>아이템 목록</Link>
          </li>
          {/* <li>
            {theme === "dark" ? (
              <IoMdSunny
                className="cursor-pointer"
                onClick={() => setTheme("light")}
              />
            ) : (
              <MdModeNight
                className="cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            )}
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
