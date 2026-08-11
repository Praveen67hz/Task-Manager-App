"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ColorTheme = "purple" | "amber" | "blue" | "pink" | "rose" | "emerald" | "black";

interface ColorThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("purple");

  useEffect(() => {
    const saved = localStorage.getItem("app-color-theme") as ColorTheme;
    if (saved && ["purple", "amber", "blue", "pink", "rose", "emerald", "black"].includes(saved)) {
      setColorTheme(saved);
    }
  }, []);

  const handleSetColorTheme = (theme: ColorTheme) => {
    setColorTheme(theme);
    localStorage.setItem("app-color-theme", theme);
  };

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme: handleSetColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  const context = useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context;
}