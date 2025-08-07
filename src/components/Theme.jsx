import Button from "./Button";
import lightIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";

const Theme = ({ theme, setTheme }) => {
  const handleThemeChangeBtn = (e) => {
    const newTheme = theme === "LIGHT" ? "DARK" : "LIGHT";
    document.body.classList.toggle("dark-theme");
    setTheme(newTheme);
  };
  return (
    <div className="theme-container">
      <Button
        handleOnClick={handleThemeChangeBtn}
        text={theme}
        classname="toggleThemeBtn"
      >
        <span>
          {theme === "LIGHT" ? (
            <img src={moonIcon} alt="moon logo" />
          ) : (
            <img src={lightIcon} alt="sun logo" />
          )}
        </span>
      </Button>
    </div>
  );
};
export default Theme;
