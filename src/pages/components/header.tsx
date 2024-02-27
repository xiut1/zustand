import Style from "./header.style";
import { useHeaderStore } from "@/store/useHeader";
export default function Header() {
  const { headerChange } = useHeaderStore();

  return (
    <Style.Header>
      <div className="header-wrap">
        <a onClick={() => headerChange("why")}>목적</a>
        <a onClick={() => headerChange("info")}>란?</a>
        <a onClick={() => headerChange("how")}>방법</a>
        <a onClick={() => headerChange("compare")}>비교</a>
      </div>
    </Style.Header>
  );
}
