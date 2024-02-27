import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

// colors 타입을 정의해 준다.
type State = {
  colors: string;
};

// colors 상태를 관리할 함수의 타입을 정의해 준다.
type Actions = {
  colorChange: () => void;
};

// 컴포넌트에서 import 되어 사용될 이름을 임의 지정해 준 다음 zustand create 메서드를 이용
export const useColorChange = create<State & Actions>()(
  devtools(
    immer((set) => ({
      // State
      colors: "white",

      // Actions
      colorChange: () =>
        set((state) => ({
          // 클릭 이벤트 발생 시 컬러값 토글
          colors: state.colors === "black" ? "white" : "black",
        })),
    })),
  ),
);
