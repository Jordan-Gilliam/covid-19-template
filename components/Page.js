import React from 'react';
import Head from 'next/head';
import { Grommet } from 'grommet';

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import theme from './Theme/theme.json';

import useToggle from './hooks/useToggle';

const Page = ({ children, pageTitle }) => {
  const { on, toggle } = useToggle();
  const setTheme = on ? 'light' : 'dark';

  return (
    <>
      <Head>
        <title>{`Charlotte Covid Support - ${pageTitle}`}</title>
      </Head>
      <Grommet theme={theme} themeMode={setTheme}>
        <Header on={on} toggleCallback={toggle} />
        {children}
        <Footer />
      </Grommet>
    </>
  );
};

export default Page;
