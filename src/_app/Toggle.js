import React from 'react';
import { Button } from 'grommet';
import Logo from './Logo';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <Button focusIndicator={false} onClick={toggleTheme}>
      <Logo isLight={isLight} />
    </Button>
  );
};

export default Toggle;
