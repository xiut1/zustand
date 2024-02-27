import React from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms"; // atoms 파일에 themeState를 정의해야 함

export default function Recoil() {
  const [theme, setTheme] = useRecoilState(themeState);

  const handleClick = () => {
    setTheme((prevTheme: string) =>
      prevTheme === "black" ? "white" : "black",
    );
  };

  return (
    <div
      style={{ backgroundColor: theme, width: "100px", height: "50px" }}
      onClick={handleClick}
    />
  );
}
