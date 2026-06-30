import { useState } from "react";

function Forma() {
  const [ism, setIsm] = useState("");
  const [pochta, setPochta] = useState("");
  const [yosh, setYosh] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    alert("Salom, " + ism + "!");
  }

  return (
    <form onSubmit={submitHandler} className="box">
      <input type="text" value={ism} onChange={(e) => setIsm(e.target.value)} placeholder="Ism" />
      <input type="email" value={pochta} onChange={(e) => setPochta(e.target.value)} placeholder="Email" />
      <input type="number" value={yosh} onChange={(e) => setYosh(e.target.value)} placeholder="Yosh" />
      <button type="submit">Yuborish</button>
    </form>
  );
}

export default Forma;
