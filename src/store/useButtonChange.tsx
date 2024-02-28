import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

// State 타입을 정의.
type State = {
  colors: string;
};

// Actions 상태를 관리할 함수의 타입을 정의.
type Actions = {
  colorChange: () => void;
};

// 컴포넌트에서 import 되어 사용될 이름 ('useColorChange')을 지정해 준 다음 zustand create 메서드를 이용하여
export const useColorChange = create(
  devtools(
    immer(
      persist<State & Actions>(
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
