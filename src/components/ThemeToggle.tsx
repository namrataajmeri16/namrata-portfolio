import { useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";
const STORAGE_KEY = "portfolio-theme";

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const label = useMemo(
    () => (theme === "light" ? "Switch to dark mode" : "Switch to light mode"),
    [theme]
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <button
      className="themeToggle"
      type="button"
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      aria-label={label}
      title={label}
    >
      <span className="themeToggleDot" aria-hidden="true" />
      <span className="themeToggleText">{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
