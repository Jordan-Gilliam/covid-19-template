import React from 'react';

import { Box, Chart, Text } from 'grommet';

const LabelledChart = ({ color, label, value }) => (
  <Box flex={false} basis="xsmall" align="center" gap="small">
    <Chart
      bounds={[
        [0, 2],
        [0, 33272]
      ]}
      type="bar"
      values={[{ value: [1, value] }]}
      color={color}
      round
      size={{ height: 'medium', width: 'xsmall' }}
    />
    <Box align="center">
      <Text>{label}</Text>
      <Text weight="bold">{value}</Text>
    </Box>
  </Box>
);

const DataChart = ({ data }) => {
  console.log({ data });

  return (
    <Box pad="large" direction="row" gap="medium">
      <LabelledChart
        scope={data.country.name}
        label="Cases"
        value={data.country.mostRecent.confirmed}
        color="status-warning"
      />
      <LabelledChart
        scope={data.country.name}
        label="Deaths"
        value={data.country.mostRecent.deaths}
        color="status-critical"
      />
      <LabelledChart
        scope={data.country.name}
        label="Recovery"
        value={data.country.mostRecent.recovered}
        color="status-critical"
      />
    </Box>
  );
};

export default DataChart;
