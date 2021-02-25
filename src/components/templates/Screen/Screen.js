/* eslint-disable import/no-cycle */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Container } from '~/components/atoms';

import styles from './Screen.module.scss';

const Screen = ({ children, title, classes }) => (
  <div className={styles.Screen} data-testid="Screen">
    <Head>
      <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
    <main className={styles.main}>
      <Container variant="column" classes={{ root: classes.container }}>
        {children}
      </Container>
    </main>
  </div>
);

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    container: PropTypes.string,
  }),
};

Screen.defaultProps = {
  classes: {
    container: null,
  },
};

export default Screen;
