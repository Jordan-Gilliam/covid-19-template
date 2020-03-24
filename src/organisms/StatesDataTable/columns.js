import React from 'react';
import { Box, Meter } from 'grommet';

export const columns = [
  {
    property: 'state',
    header: 'Location'
  },
  {
    property: 'cases',
    header: 'Cases',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ value: datum.caseRatio }]}
          thickness="small"
          size="small"
        />
      </Box>
    )
  },
  {
    property: 'deaths',
    header: 'Deaths',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ value: datum.deathRatio }]}
          thickness="small"
          size="small"
        />
      </Box>
    )
  }
];
