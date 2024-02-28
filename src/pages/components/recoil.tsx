import React from "react";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms"; // atoms 파일에 themeState를 정의해야 함

type Theme = "black" | "white";

export default function Recoil() {
  // useRecoilState 의 첫번째 인자는 atoms 에서 가져온 state, 두번째 인자는 setter 로 변경 되는 값
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme: () => void = () => {
    setTheme((prevTheme) => (prevTheme === "black" ? "white" : "black"));
  };

  return (
    <div
      style={{ backgroundColor: theme, width: "100px", height: "50px" }}
      onClick={toggleTheme}
    />
  );
}
