const Button = ({ classname, text, handleOnClick, children }) => {
  return (
    <button onClick={handleOnClick} className={classname}>
      {text}
      {children}
    </button>
  );
};
export default Button;
