import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-10 fixed top-0 w-full z-10">
      <nav className="flex justify-between items-center ">
        <Link href={"/"}>
          <Image
            src={"/assets/logo.png"}
            width={50}
            height={50}
            alt="홈 로고"
          />
        </Link>
        <ul className="flex w-full justify-end items-center gap-10">
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
  );
};

export default Header;
