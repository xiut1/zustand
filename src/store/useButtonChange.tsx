import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

// State 타입을 정의.
type colors = {
  colors: string;
};

// Actions 상태를 관리할 함수의 타입을 정의.
type colorChange = {
  colorChange: () => void;
};

// 컴포넌트에서 import 되어 사용될 이름 ('useColorChange')을 지정해 준 다음 zustand create 메서드를 이용하여
export const useColorChange = create(
  devtools(
    immer(
      // 타입 값으로 State 와 Action 지정해 놓은 부분을 설정해 줌
      persist<colors & colorChange>(
        (set) => ({
          // state 의 기본값을 정의
          colors: "white",

          // action 정의
          colorChange: () =>
            set((state) => ({
              colors: state.colors === "black" ? "white" : "black",
            })),
        }),

        // persist의 옵션 name값과 local, session storage를 설정 할 수 있다.
        {
          name: "color-storage", // storage name
        },
      ),
    ),
  ),
);

// subscribe 함수를 사용 하여 useColorChange 의 colors 값이 변경 될 경우 log 를 출력
useColorChange.subscribe((colors) => {
  console.log(colors);
});
