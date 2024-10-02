"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IoMdSunny } from "react-icons/io";
import { MdModeNight } from "react-icons/md";

const ThemeButton = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeButton = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="fixed bottom-5 right-5 w-[50px] h-[50px] rounded-full flex justify-center items-center border-solid border-2"
      onClick={handleThemeButton}
    >
      {theme === "dark" ? (
        <IoMdSunny className="cursor-pointer" />
      ) : (
        <MdModeNight className="cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeButton;
