import Link from "next/link";

const HiddenHeaderList = ({
  isOpen,
  onClick,
  onAnimationEnd,
}: {
  isOpen: boolean;
  onClick: () => void;
  onAnimationEnd: () => void;
}) => {
  return (
    <div
      className={`sticky top-20 md:hidden bg-gray-700 text-white py-4 px-10 overflow-hidden ${
        isOpen ? "animate-slideDown" : "animate-slideUp"
      }`}
      style={{ "--target-height": "144px" } as React.CSSProperties}
      onAnimationEnd={onAnimationEnd}
    >
      <ul className="flex flex-col items-center gap-5">
        <li>
          <Link
            href={"/rotation"}
            onClick={onClick}
            className="hover:text-[#ff5555]"
          >
            로테이션
          </Link>
        </li>
        <li>
          <Link
            href={"/champions"}
            onClick={onClick}
            className="hover:text-[#ff5555]"
          >
            챔피언 목록
          </Link>
        </li>
        <li>
          <Link
            href={"/items"}
            onClick={onClick}
            className="hover:text-[#ff5555]"
          >
            아이템 목록
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HiddenHeaderList;
