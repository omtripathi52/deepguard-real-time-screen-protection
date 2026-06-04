import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({ theme: "dark", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("ss-theme") || "dark"
        : "dark";
    setTheme(stored);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof localStorage !== "undefined")
      localStorage.setItem("ss-theme", next);
    if (typeof document !== "undefined")
      document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
