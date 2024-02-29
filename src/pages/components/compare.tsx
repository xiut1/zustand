import React, { useContext } from "react";
import Context from "@/pages/components/context";
import Redux from "@/pages/components/redux";
import Recoil from "@/pages/components/recoil";
import { useColorChange } from "@/store/useButtonChange";

export default function Compare() {
  const { colors, colorChange } = useColorChange();

  return (
    <div className="wrap">
      <div className="box">
        <h2>Context</h2>
        <Context />
      </div>
      <div className="box">
        <h2>Recoil</h2>
        <Recoil />
      </div>
      <div className="box">
        <h2>Redux</h2>
        <Redux />
      </div>
      <div className="box">
        <h2>Zustand</h2>
        <button
          onClick={() => colorChange()}
          style={{ backgroundColor: colors, width: "100px", height: "50px" }}
        />
      </div>
      <div className="box">
        <h2>느낀점</h2>
      </div>
    </div>
  );
}
