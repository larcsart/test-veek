import React from 'react';
import AppsIcon from '../../../assets/icons/apps.svg';
import { Button } from '~/components/atoms';
import styles from './HeaderBar.module.scss';

const HeaderBar = () => (
  <div className={styles.HeaderBar} data-testid="HeaderBar">
    <span>Gmail</span>
    <span>Imagens</span>
    <AppsIcon />
    <Button variant="primary">
      Fazer login
    </Button>
  </div>
);

export default HeaderBar;
