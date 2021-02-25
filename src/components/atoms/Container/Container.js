import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ children, classes, variant }) => (
  <div className={classNames(styles.Container, styles[variant], classes.root)} data-testid="Container">
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  variant: PropTypes.oneOf(['row', 'column']),
};

Container.defaultProps = {
  classes: {},
  variant: 'row',
};

export default Container;
