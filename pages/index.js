/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HeaderSearch } from '~/components/organisms';
import { useFetchSearch } from '~/hooks';
import { withTranslation } from '~/i18n';
import { Screen } from '~/components/templates';
import styles from './index.module.scss';
import HeaderBar from '~/components/molecules/HeaderBar/HeaderBar';

const Index = ({ t }) => {
  const route = useRouter();
  const { query: { q } = {} } = route;
  const date = new Date();
  useFetchSearch(q, date);

  return (
    <Screen title={t('h1')}>
      <HeaderBar />
      <div className={styles.container}>
        <Image src="/logo.png" width={272} height={92} />
        <HeaderSearch />
      </div>
    </Screen>
  );
};

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Index);
