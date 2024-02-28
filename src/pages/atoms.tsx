import { atom } from "recoil";

// recoil의 전역변수 관리를 위한 공간
export const themeState = atom({
  key: `themeState`,
  default: "white",
});
