import React from 'react';
import { Box, Meter } from 'grommet';

const getColumns = location => {
  const columns = [
    {
      property: location,
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

  return { columns };
};

export default getColumns;
