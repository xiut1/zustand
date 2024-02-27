import "../styles/global.css";
import { RecoilRoot } from "recoil";
import { useHeaderStore } from "@/store/useHeader";

import Header from "@/pages/components/header";
import Info from "@/pages/components/info";
import Why from "@/pages/components/why";
import How from "@/pages/components/how";
import Compare from "@/pages/components/compare";

export default function App() {
  const { headerType } = useHeaderStore();

  return (
    <RecoilRoot>
      <div className="app">
        <div className="content">
          <Header />
          {headerType === "info" && <Info />}
          {headerType === "why" && <Why />}
          {headerType === "how" && <How />}
          {headerType === "compare" && <Compare />}
        </div>
      </div>
    </RecoilRoot>
  );
}
