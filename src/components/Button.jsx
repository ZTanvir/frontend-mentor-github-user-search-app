const Button = ({ classname, text, handleOnClick }) => {
  return (
    <button onClick={handleOnClick} className={classname}>
      {text}
    </button>
  );
};
export default Button;
