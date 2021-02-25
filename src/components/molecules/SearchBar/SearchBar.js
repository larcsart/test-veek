import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';
import { Input, Button } from '~/components/atoms';
import SearchIcon from '../../../assets/icons/search.svg';
import KeyboardImage from '../../../assets/images/keyboard.png';
import Microphone from '../../../assets/icons/microphone.svg';

const SearchBar = ({ onSubmit, value: valueProp }) => {
  const [value, changeInputValue] = useState(valueProp);

  useEffect(() => {
    changeInputValue(valueProp);
  }, [valueProp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleInputChange = (e) => {
    changeInputValue(e.target.value);
  };

  return (
    <form
      className={styles.SearchBar}
      data-testid="SearchBar"
      role="search"
      onSubmit={handleSubmit}
    >
      <div className={styles.inputContainer}>
        <SearchIcon className={styles.searchIcon} />
        <Input
          classes={{ root: styles.input }}
          value={value}
          onChange={handleInputChange}
        />
        <img src={KeyboardImage} className={styles.keyboardIcon} alt="keyboard" />
        <Microphone className={styles.microphoneIcon} />
      </div>
      <Button variant="secondary" onClick={handleSubmit} type="submit">Pesquisa Google</Button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
};

SearchBar.defaultProps = {
  onSubmit: () => {},
  value: '',
};

export default SearchBar;
