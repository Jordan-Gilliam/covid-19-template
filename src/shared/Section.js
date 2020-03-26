import React from 'react';
import { Heading, Box } from 'grommet';

const Section = ({ children, name, elbowRoom = 'medium' }) => (
  <Box tag="section" pad={{ vertical: elbowRoom, horizontal: elbowRoom }}>
    <Heading level={2} margin={{ top: 'none' }} alignSelf="center">
      {name}
    </Heading>
    {children}
  </Box>
);

export default Section;
