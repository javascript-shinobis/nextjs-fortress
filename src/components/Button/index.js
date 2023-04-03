function Button({ handleClick, title }) {
  console.log(handleClick);

  return (
    <button type="button" className="button-design" onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;
