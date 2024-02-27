import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  headerType: string;
};

type Action = {
  headerChange: (todoId: string) => void;
};

export const useHeaderStore = create<State & Action>()(
  immer((set) => ({
    headerType: "info",

    headerChange: (props: string) =>
      set((state) => {
        state.headerType = props;
      }),
  })),
);
