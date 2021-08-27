import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ buttonName, increment }) => {
  return (
    <li className={s.list}>
      <button className={s.button} onClick={() => increment(buttonName)}>
        {buttonName}
      </button>
    </li>
  );
};
export default Button;

Button.propTypes = {
  buttonName: PropTypes.string,
  increment: PropTypes.func,
};
