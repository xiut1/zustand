import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// 액션을 생성, 버튼 클릭시 호출된다.
const swapTheme = () => ({
  type: "THEME_SWAP",
});

// Reducer 함수로 상태 변화 로직을 처리 현재 상태 및 액션을 불러와 새로운 상태로 변환하는 작업을 한다.
const themeReducer = (state = "white", action: { type: string }) => {
  switch (action.type) {
    case "THEME_SWAP":
      return state === "black" ? "white" : "black";
    default:
      return state;
  }
};

// store 라는 redux store 을 생성 한다.
const store = createStore(themeReducer);

// 컴포넌트 생성
const ThemeButton = () => {
  // useSelector는 현재 상태(테마 색)에 접근 한다.
  const theme = useSelector((state: string) => state);
  // useDispatch는 테마 변경 액션을 dispatch하기 위해 사용된다.
  const dispatch = useDispatch();

  const handleClick = () => dispatch(swapTheme());

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: theme, width: "100px", height: "50px" }}
    />
  );
};

export default function Redux() {
  return (
    <Provider store={store}>
      <ThemeButton />
    </Provider>
  );
}
