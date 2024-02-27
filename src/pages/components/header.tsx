import Style from "./header.style";
import { useHeaderStore } from "@/store/useHeader";
export default function Header() {
  const { headerChange } = useHeaderStore();

  return (
    <Style.Header>
      <div className="header-wrap">
        <a onClick={() => headerChange("info")}>Zustand</a>
        <a onClick={() => headerChange("why")}>사용목적</a>
        <a onClick={() => headerChange("how")}>사용방법</a>
        <a onClick={() => headerChange("compare")}>비교</a>
      </div>
    </Style.Header>
  );
}
