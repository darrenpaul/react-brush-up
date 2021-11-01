import PropTypes from "prop-types";

const Button = ({ color, text, onClickFn }) => {
  return (
    <button
      onClick={onClickFn}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelBlue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClickFn: PropTypes.func,
};

export default Button;
