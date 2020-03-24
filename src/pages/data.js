import { Anchor, Box, Paragraph } from 'grommet';
import DataHeading from '../data/DataHeading';
import CountriesDataTable from '../data/CountriesDataTable';
import StatesDataTable from '../data/StatesDataTable';

export default () => {
  return (
    <Box align="center" margin="large">
      <DataHeading />
      <CountriesDataTable />
      <StatesDataTable />
      <Paragraph>
        slack 👉 <Anchor href={process.env.SLACK_URL}>join on slack!</Anchor>
      </Paragraph>
    </Box>
  );
};
