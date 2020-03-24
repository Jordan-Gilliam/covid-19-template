import React from 'react';
import { Button } from 'grommet';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <Button
      primary
      color={isLight ? 'accent-3' : ''}
      label={!isLight ? 'Light' : 'Dark'}
      onClick={toggleTheme}
    />  
  );
};

export default Toggle;
