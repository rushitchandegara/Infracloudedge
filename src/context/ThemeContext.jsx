import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 1. Initialize state from LocalStorage or System Preference
  const [theme, setTheme] = useState(() => {
    // Check if running in browser
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // If user has a saved preference, use it
      if (savedTheme) {
        return savedTheme;
      }
      // Otherwise check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    // Default to light if nothing else matches
    return 'light';
  });

  // 2. Sync theme class to the <html> tag
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both to prevent conflicts, then add the active one
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Save to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 3. Toggle Function
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* CRITICAL: This renders your App components. If missing, page is white. */}
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for using the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};