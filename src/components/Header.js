import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showAdd, onAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>

      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClickFn={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Header",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
