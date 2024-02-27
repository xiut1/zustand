import React, { useState } from "react";

// ThemeType의 타입을 지정
type ThemeType = string;

// 이름을 ThemeContext 지정 후 기본값을 white로 세팅해 준다.
const ThemeContext = React.createContext<ThemeType>("white");

export default function ContextProvider() {
  // Context의 상태 변화를 위해선 결국 useState를 사용하여 변경 해야 한다.
  const [theme, setTheme] = useState<ThemeType>("white");

  const handleClick = () => {
    // 클릭 이벤트 발생 시 컬러값 토글
    setTheme(theme === "black" ? "white" : "black");
  };

  return (
    // Context가 적용될 부분을 Provider로 지정해 준다.
    <ThemeContext.Provider value={theme}>
      <button
        onClick={handleClick}
        style={{ backgroundColor: theme, width: "100px", height: "50px" }}
      />
    </ThemeContext.Provider>
  );
}
