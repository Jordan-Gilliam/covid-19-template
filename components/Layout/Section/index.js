import React from 'react'
import { Heading, Box } from 'grommet';

const Section = ({ children, name }) => (
    <Box
      tag='section'
      pad={{ vertical: 'medium', horizontal: 'xlarge' }}
    >
      <Heading level={2} margin={{ top: 'none' }} alignSelf='center'>
        {name}
      </Heading>
      {children}
    </Box>
  );

  export default Section