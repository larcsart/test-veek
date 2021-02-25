import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SearchIcon from '../../../assets/icons/search.svg';

import styles from './SearchButton.module.scss';

const SearchButton = ({ type, classes, ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <button className={classNames(classes.root, styles.SearchButton)} type={type} {...props}>
    <SearchIcon />
  </button>
);

SearchButton.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
};

SearchButton.defaultProps = {
  classes: {},
  type: 'submit',
};

export default SearchButton;
