import { Anchor, Box, Paragraph } from 'grommet';
import DataHeading from '../organisms/DataHeading';
import CountriesDataTable from '../organisms/CountriesDataTable';
import StatesDataTable from '../organisms/StatesDataTable';

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
