"use client";

import { ConfigProvider, ThemeConfig } from "antd";
import { createContext, useContext, useEffect, useState } from "react";

// Define ThemeContext for global access
const ThemeContext = createContext<{
  isDark: boolean;
  toggleTheme: () => void;
}>({
  isDark: false,
  toggleTheme: () => {},
});

// Define Ant Design themes
const lightTheme: ThemeConfig = {
  token: {
    colorPrimary: "#1677ff", // Customize primary color
    colorBgBase: "#ffffff",
    colorTextBase: "#000000",
  },
};

const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: "#1677ff",
    colorBgBase: "#1a1a1a",
    colorTextBase: "#ffffff",
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setIsDark(storedTheme === "dark");
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme
export function useTheme() {
  return useContext(ThemeContext);
}
