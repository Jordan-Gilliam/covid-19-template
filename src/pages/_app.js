/**
 * Next.js uses the App component to initialize pages.
 * You can override it and control the page initialization.
 * Which allows you to do amazing things like:
 *
 * - Persisting layout between page changes
 * - Keeping state when navigating pages
 * - Custom error handling using componentDidCatch
 * - Inject additional data into pages
 * - Add global CSS
 *
 */

import App from 'next/app';
import React from 'react';
import { Grommet } from 'grommet';
import { grommet, dark } from 'grommet/themes';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import useToggle from '../components/hooks/useToggle';

const DarkThemeApp = ({ children }) => {
  const { on, toggle } = useToggle();
  return (
    <Grommet theme={on ? dark : grommet}>
      <Header on={on} toggleCallback={toggle} />
      {children}
      <Footer />
    </Grommet>
  );
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <DarkThemeApp>
        <Component {...pageProps} />
      </DarkThemeApp>
    );
  }
}
