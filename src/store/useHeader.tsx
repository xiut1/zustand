import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

type State = {
  headerType: string;
};

type Action = {
  headerChange: (headerType: string) => void;
};

export const useHeaderStore = create<State & Action>()(
  devtools(
    immer(
      persist(
        (set) => ({
          headerType: "info",

          headerChange: (props: string) =>
            set((state) => {
              state.headerType = props;
            }),
        }),
        {
          name: "header-storage", // storage name
        },
      ),
    ),
  ),
);
