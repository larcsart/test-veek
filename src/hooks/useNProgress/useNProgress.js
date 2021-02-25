/* eslint-disable react/prop-types */

import NProgress from 'nprogress';
import Router from 'next/router';

const useNProgress = () => {
  NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false,
  });

  Router.events.on('routeChangeStart', NProgress.start);
  Router.events.on('routeChangeComplete', NProgress.done);
  Router.events.on('routeChangeError', NProgress.done);
  return null;
};

export default useNProgress;
