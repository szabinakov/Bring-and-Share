import React from "react";
import PropTypes from "prop-types";
import "../styles/Alert.css";

const Alert = ({ message, success }) => {
  return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.any.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};

export default Alert;
