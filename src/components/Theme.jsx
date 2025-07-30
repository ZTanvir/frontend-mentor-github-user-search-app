import Button from "./Button";
const Theme = () => {
  const handleThemeChangeBtn = (e) => {};
  return (
    <Button
      handleOnClick={handleThemeChangeBtn}
      text="theme name"
      classname="toggleThemeBtn"
    />
  );
};
export default Theme;
