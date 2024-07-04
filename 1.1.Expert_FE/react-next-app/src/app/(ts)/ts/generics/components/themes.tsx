import React, { ReactNode, useState } from "react";

type Theme = "light" | "dark" | "system";

export default function Themes() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>("light");
  const themeOptions: Theme[] = ["light", "dark", "system"];

  const onThemeClick = (theme: Theme) => {
    console.log("onThemeClick", theme);
    setSelectedTheme(theme);
  };

  return (
    <div>
      <h1>Themes</h1>
      <p>
        Selected theme: <strong>{selectedTheme}</strong>
      </p>
      <ThemesOption themeOptions={themeOptions} selectedTheme={selectedTheme} onThemeClick={onThemeClick} />
    </div>
  );
}

type ThemesOptionProps<T> = {
  themeOptions: T[];
  selectedTheme: T;
  onThemeClick: (theme: T) => void;
};

function ThemesOption<T extends ReactNode>({ themeOptions, selectedTheme, onThemeClick }: ThemesOptionProps<T>) {
  return (
    <div>
      <ul>
        {themeOptions.map((theme, index) => {
          return (
            <li key={index}>
              <button onClick={() => onThemeClick(theme)}>
                {/* {theme as ReactNode} */}
                {theme}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
