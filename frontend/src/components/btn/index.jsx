const Button = ({ label, handleClick, classname }) => {
  return (
    <button onClick={handleClick} className={classname}>
      {label}
    </button>
  );
};

export default Button;
