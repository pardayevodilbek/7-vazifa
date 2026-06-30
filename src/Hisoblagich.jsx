import { useState } from "react";

function Hisoblagich() {
  const [son, setSon] = useState(0);

  function kop() {
    setSon(son + 1);
  }

  function kam() {
    setSon(son - 1);
  }

  function tozala() {
    setSon(0);
  }

  return (
    <div className="counter-box">
      <h2>Hisoblagich</h2>

      <p className="counter-num">{son}</p>

      <div className="counter-btns">
        <button onClick={kam}>-</button>
        <button onClick={tozala}>Reset</button>
        <button onClick={kop}>+</button>
      </div>
    </div>
  );
}

export default Hisoblagich;
