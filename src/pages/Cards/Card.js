import React from 'react';
import { Box, Image } from 'grommet';

const Card = ({ business = {}, children, ...rest }) => (
  <Box round="small" elevation="small" overflow="hidden" {...rest}>
    <Box height="small">
      <Image src={business.image} fit="cover" />
    </Box>
    {children}
  </Box>
);

export default Card;
