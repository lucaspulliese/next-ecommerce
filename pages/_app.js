import React, { Fragment } from 'react';
import Router from 'next/router';

import 'swiper/swiper.scss';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';
import '../assets/css/styles.scss';

import * as gtag from './../lib/gtag';

const isProduction = process.env.NODE_ENV === 'production';

// only events on production
if(isProduction) {
  // Notice how we track pageview when route is changed
  Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));
}

// This default export is required in a new `pages/_app.js` file.
export default ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}