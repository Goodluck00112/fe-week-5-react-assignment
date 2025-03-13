import { useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.style.backgroundColor = theme === "light" ? "#333" : "#fff";
  };

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#222" : "#ddd",
        color: theme === "light" ? "#fff" : "#000",
      }}
    >
      Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggle;
