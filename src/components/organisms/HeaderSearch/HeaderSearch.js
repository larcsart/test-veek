/* eslint-disable import/no-cycle */

import React from 'react';
import { useRouter } from 'next/router';
import styles from './HeaderSearch.module.scss';
import { SearchBar } from '~/components/molecules';
import { Container } from '~/components/atoms';

const HeaderSearch = () => {
  const route = useRouter();
  const { query: { q } = {} } = route || {};

  const handleSubmit = (value) => {
    if (value.length > 2) route.push(`?q=${value}`);
  };

  return (
    <div className={styles.HeaderSearch} data-testid="HeaderSearch">
      <Container classes={{ root: styles.container }}>
        <SearchBar value={q} onSubmit={handleSubmit} />
      </Container>
    </div>
  );
};

export default HeaderSearch;
