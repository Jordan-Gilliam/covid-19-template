import { Anchor, Box, Heading, Paragraph } from 'grommet';
import { useQuery } from '@apollo/react-hooks';
import { Spinning } from 'grommet-controls';
import Section from '../components/Layout/Section';
import Map from '../components/Map';
import DataChart from '../components/DataChart';
import { GET_US_CURRENT } from '../graphql/queries';
import withApollo from '../apollo';

const Data = () => {
  const { data, loading, error } = useQuery(GET_US_CURRENT);

  if (loading) return <Spinning />;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <Box align="center" margin="large">
      <Heading>{data.country.name} DATA</Heading>
      <Section>
        <DataChart data={data} />
      </Section>
      <Section>
        <Map />
      </Section>
      <Paragraph>
        slack 👉 <Anchor href={process.env.SLACK_URL}>join on slack!</Anchor>
      </Paragraph>
    </Box>
  );
};

export default withApollo({ ssr: true })(Data);
