import React from 'react';

import { Box, Stack } from 'grommet';

const Logo = ({ isLight }) => {
  const borderColor = isLight ? 'brand' : 'accent-1';
  return (
    <Stack anchor="center">
      <Box
        width="xxsmall"
        height="xxsmall"
        round="small"
        elevation="large"
        align="center"
        justify="center"
        animation="pulse"
        border={{ color: borderColor, size: 'xlarge' }}
      />
      <Box
        width={'32px'}
        height={'32px'}
        elevation="xlarge"
        round="small"
        align="center"
        justify="center"
        animation="pulse"
        background={!isLight ? 'black' : 'light-1'}
      />
    </Stack>
  );
};

export default Logo;
