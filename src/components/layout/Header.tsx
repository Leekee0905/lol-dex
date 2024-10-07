"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import HiddenHeaderList from "./HiddenHeaderList";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false); // 메뉴가 보여지는지 여부

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true); // 메뉴 열릴 때 보이도록 설정
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsVisible(false); // slideUp이 끝나면 메뉴 숨김
    }
  };

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
            <p className="hover:text-[#ff5555]">롤 백과사전</p>
          </Link>

          <button
            className="block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxHamburgerMenu />
          </button>

          <ul className="hidden md:flex justify-end items-center gap-10">
            <li>
              <Link href={"/rotation"} className="hover:text-[#ff5555]">
                로테이션
              </Link>
            </li>
            <li>
              <Link href={"/champions"} className="hover:text-[#ff5555]">
                챔피언 목록
              </Link>
            </li>
            <li>
              <Link href={"/items"} className="hover:text-[#ff5555]">
                아이템 목록
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {isVisible && (
        <HiddenHeaderList
          isOpen={isOpen}
          onClick={handleClose}
          onAnimationEnd={handleAnimationEnd} // 애니메이션 종료 시 호출
        />
      )}
    </>
  );
};

export default Header;
