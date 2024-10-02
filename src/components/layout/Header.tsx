"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import HiddenHeaderList from "./HiddenHeaderList";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className="bg-gray-800 text-white py-4 px-10 sticky top-0 w-full z-10 flex flex-col">
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

          <button
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxHamburgerMenu />
          </button>

          <ul className="hidden md:flex justify-end items-center gap-10">
            <li>
              <Link href={"/rotation"}>로테이션</Link>
            </li>
            <li>
              <Link href={"/champions"}>챔피언 목록</Link>
            </li>
            <li>
              <Link href={"/items"}>아이템 목록</Link>
            </li>
          </ul>
        </nav>
      </header>

      {isOpen && <HiddenHeaderList onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Header;
