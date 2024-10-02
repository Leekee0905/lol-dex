import Link from "next/link";

const HiddenHeaderList = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="sticky top-20 md:hidden bg-gray-700 text-white py-4 px-10">
      <ul className="flex flex-col items-center gap-5">
        <li>
          <Link href={"/rotation"} onClick={onClick}>
            로테이션
          </Link>
        </li>
        <li>
          <Link href={"/champions"} onClick={onClick}>
            챔피언 목록
          </Link>
        </li>
        <li>
          <Link href={"/items"} onClick={onClick}>
            아이템 목록
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HiddenHeaderList;
