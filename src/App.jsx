import { useState } from "react";
import Hisoblagich from "./Hisoblagich";
import "./App.css";

function App() {
  const [ism, setIsm] = useState("");
  const [pochta, setPochta] = useState("");
  const [yosh, setYosh] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    alert("Salom, " + ism + "! Email: " + pochta + ", Yosh: " + yosh);
  }

  return (
    <div className="container">
      <form onSubmit={submitHandler} className="box">
        <h2>Ro'yxatdan o'tish</h2>

        <input
          type="text"
          value={ism}
          onChange={(e) => setIsm(e.target.value)}
          placeholder="Ism"
        />
        <input
          type="email"
          value={pochta}
          onChange={(e) => setPochta(e.target.value)}
          placeholder="Email"
        />
        <input
          type="number"
          value={yosh}
          onChange={(e) => setYosh(e.target.value)}
          placeholder="Yosh"
        />

        <button type="submit">Yuborish</button>
      </form>

      <Hisoblagich />
    </div>
  );
}

export default App;
