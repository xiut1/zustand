import "../styles/global.css";
import Header from "@/pages/components/header";
import { useHeaderStore } from "@/store/useHeader";
import Info from "@/pages/components/info";
import Why from "@/pages/components/why";

export default function App() {
  const { headerType } = useHeaderStore();

  return (
    <div className="app">
      <div className="content">
        <Header />
        {headerType === "info" && <Info />}
        {headerType === "why" && <Why />}
      </div>
    </div>
  );
}
