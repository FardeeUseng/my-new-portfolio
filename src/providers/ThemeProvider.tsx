"use client";

import { ConfigProvider } from "antd";
import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// Define ThemeContext for global access
const ThemeContext = createContext<{
  isDark: boolean;
  toggleTheme: () => void;
}>({
  isDark: false,
  toggleTheme: () => {},
});

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
      <ConfigProvider
        theme={isDark ? {
          token: {
            colorPrimary: "#1d1f21",
            colorBgBase: "#1a1a1a",
            colorTextBase: "#ffffff",
          },
        } : {
          token: {
            colorPrimary: "#1677ff",
            colorBgBase: "#ffffff",
            colorTextBase: "#000000",
          }
        }}
      >
        <StyledThemeProvider
          theme={isDark ? {
            primaryColor: "#1890ff",
            secondaryColor: "#ffffff",
            backgroundColor: "#f5f5f5",
            textColor: "#000000",
          } : {
            primaryColor: "#1d1f21", // Dark Gray
            secondaryColor: "#ffffff",
            backgroundColor: "#121212", // Dark Mode Background
            textColor: "#ffffff",
          }}
        >
          {children}
        </StyledThemeProvider>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme
export function useTheme() {
  return useContext(ThemeContext);
}
