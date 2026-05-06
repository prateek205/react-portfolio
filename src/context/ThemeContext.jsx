import { createContext, useContext, useEffect, useState } from "react";

export const ContextTheme = createContext();

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme(true);
    }
  }, []);

  const handleToggle = () => {
    if (theme) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setTheme(!theme);
  };

  return (
    <ContextTheme.Provider value={{ theme, setTheme, handleToggle }}>
      {children}
    </ContextTheme.Provider>
  );
};

export const myContext = () => useContext(ContextTheme);
