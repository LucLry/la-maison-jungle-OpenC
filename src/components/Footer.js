import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        name="email"
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => checkIfEmail(inputValue)}
      />
    </footer>
  );
}

function checkIfEmail(email) {
  if (!email.includes("@")) {
    alert("Ce n'est pas un email valide, il manque '@'");
  }
}

export default Footer;
