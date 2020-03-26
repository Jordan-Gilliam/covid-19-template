import React from 'react';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

import isLightContext from '../shared/isLightContext';
import Nav from '../_app/_app/Nav';
import Toggle from '../_app/_app/Toggle';
import Footer from '../_app/_app/Footer';
import useDarkMode from '../_app/_app/useDarkMode';

const MyApp = ({ Component, pageProps }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const light = theme === 'light';
  const themeMode = light ? 'light' : 'dark';

  if (!componentMounted) {
    return <div />;
  }

  return (
    <Grommet theme={grommet} themeMode={themeMode}>
      <Nav>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </Nav>
      <isLightContext.Provider value={{ isLight: light }}>
        {componentMounted && <Component {...pageProps} />}
      </isLightContext.Provider>
      <Footer />
    </Grommet>
  );
};

export default MyApp;
