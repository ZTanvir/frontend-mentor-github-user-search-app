import Button from "./Button";
const Theme = ({ theme, setTheme }) => {
  const handleThemeChangeBtn = (e) => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <div className="theme-container">
      <Button
        handleOnClick={handleThemeChangeBtn}
        text={theme}
        classname="toggleThemeBtn"
      />
    </div>
  );
};
export default Theme;
