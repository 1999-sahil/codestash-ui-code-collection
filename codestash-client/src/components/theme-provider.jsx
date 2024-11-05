import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia("prefer-color-schema: dark").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
      }, []);
    
      useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
      }, [theme]);

      const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
      };

      return (
        <ThemeContext.Provider value={{ theme, handleThemeSwitch }}>
            {children}
        </ThemeContext.Provider>
      )
}

export function useTheme() {
    return useContext(ThemeContext);
}