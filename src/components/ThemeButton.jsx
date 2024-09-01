import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "daisyui/dist/full.css";

const ThemeButton = () => {
  const [theme, setTheme] = useState("dim"); // default theme
  const themes = [
    "light",
    "dark",
    "garden",
    "dracula",
    "night",
    "synthwave",
    "dim",
  ]; // add all available themes

  const handleThemeChange = (option) => {
    setTheme(option.value);
    document.documentElement.setAttribute("data-theme", option.value);
  };

  return (
    <div className={`flex justify-end my-2  mr-4`}>
      <Dropdown
        options={themes.map((theme) => ({ value: theme, label: theme }))}
        onChange={handleThemeChange}
        value={theme}
        placeholder="Select a theme"
        className="w-36"
        controlClassName="flex justify-between items-center py-1 pl-2 pr-8 rounded"
      />
    </div>
  );
};

export default ThemeButton;
