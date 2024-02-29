import { create } from "zustand";
import { combine } from "zustand/middleware";

interface CartStore {
  items: string[];
  add: (item: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: ["이형진이 사놓고 잘 안쓰는 VR기기", "이형진의 중복된 포켓몬 스티커"],
  add: (item) => set((state) => ({ ...state, items: [...state.items, item] })),
}));

interface LoginStore {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

export const useLoginStore = create<LoginStore>((set) => ({
  loggedIn: false,
  logIn: () => set((state) => ({ ...state, loggedIn: true })),
  logOut: () => set((state) => ({ ...state, loggedIn: false })),
}));

export const useStore = create(
  combine(
    {
      cart: useCartStore.getState(),
      login: useLoginStore.getState(),
    },
    (set) => ({
      cart: {
        ...useCartStore.getState(),
        add: (item: string) =>
          set((state) => ({
            ...state,
            cart: { ...state.cart, items: [...state.cart.items, item] },
          })),
      },
      login: {
        ...useLoginStore.getState(),
        logIn: () =>
          set((state) => ({
            ...state,
            login: { ...state.login, loggedIn: true },
          })),
        logOut: () =>
          set((state) => ({
            ...state,
            login: { ...state.login, loggedIn: false },
          })),
      },
    }),
  ),
);
