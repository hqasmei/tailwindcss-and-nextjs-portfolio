"use client";
import React from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="bg-slate-100 p-2 rounded-xl"
    >
      {currentTheme === "dark" ? (
        <RiSunLine size={25} color="black" />
      ) : (
        <RiMoonFill size={25} />
      )}
    </button>
  );
};

/*
     <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className="bg-slate-100 p-2 rounded-xl">
            {currentTheme === "dark"? <RiSunLine size={25} color="black" />: <RiMoonFill size={25} />}
        </button>

              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}

*/

export default ToggleButton;
