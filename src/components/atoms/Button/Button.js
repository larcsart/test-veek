import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  children, type, variant, classes, ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button className={classNames(styles.Button, classes.root, styles[variant])} data-testid="Button" type={type} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};

Button.defaultProps = {
  type: 'button',
  classes: {},
  variant: 'secondary',
};

export default Button;
