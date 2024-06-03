import PropTypes from "prop-types";
import styles from "./button.module.css";

const ButtonRound = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.round}>
      {children}
    </button>
  );
};

ButtonRound.propTypes = {
  children: PropTypes.node.isRequired,

  onClick: PropTypes.func.isRequired,
};

export default ButtonRound;
