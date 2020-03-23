import { Anchor, Box, Heading, Paragraph } from 'grommet';
import Page from '../components/Page';
import Section from '../components/Layout/Section';
import Map from '../components/Map'

export default () => (
  <Page pageTitle="data">
    <Box align="center" margin="large">
      <Heading>DATA</Heading>
      <Heading level={2}>⚠️Work in Progress⚠️</Heading>
      <Paragraph>
        github 👉{' '}
        <Anchor href={process.env.GITHUB_URL}>
          help hack covid!
        </Anchor>
      </Paragraph>
      <Section>
          <Map />
      </Section>
      <Paragraph>
        slack 👉{' '}
        <Anchor href={process.env.SLACK_URL}>
          join on slack!
        </Anchor>
      </Paragraph>
    </Box>
  </Page>
);
