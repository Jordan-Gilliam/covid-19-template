import React from 'react';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import Header from '../_app/Header';
import Toggle from '../_app/Toggle';
import Footer from '../_app/Footer';
import { useDarkMode } from '../_app/useDarkMode';

const MyApp = ({ Component, pageProps }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? 'light' : 'dark';

  if (!componentMounted) {
    return <div />
  };

  return (
    <Grommet theme={grommet} themeMode={themeMode}>
      <Header>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </Header>
      {<Component {...pageProps} />}
      <Footer />
    </Grommet>
  );
};

export default MyApp;
