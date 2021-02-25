import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.scss';

const Input = ({ classes, ...props }) => (
  <input className={classNames(styles.Input, classes.root)} data-testid="Input" {...props} />
);

Input.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};

Input.defaultProps = {
  classes: {},
};

export default Input;
