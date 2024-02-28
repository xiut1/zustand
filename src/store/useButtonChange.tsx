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

// persist를 사용 하기 위한 함수, session storage에 등록될때 [object, Object] 뜨는것을 확인하기 위해 작업
const sessionStorageWrapper = {
  getItem: (name: string) => JSON.parse(sessionStorage.getItem(name) || "{}"),
  setItem: (name: string, value: any) =>
    sessionStorage.setItem(name, JSON.stringify(value)),
  removeItem: (name: string) => sessionStorage.removeItem(name),
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
          storage: sessionStorageWrapper,
        },
      ),
    ),
  ),
);
