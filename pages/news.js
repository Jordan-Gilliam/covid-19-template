import { Anchor, Box, Heading, Paragraph } from 'grommet';
import Page from '../components/Page';

export default () => (
  <Page pageTitle="home">
    <Box align="center" margin="large">
      <Heading>NEWS</Heading>
      <Heading level={2}>⚠️Work in Progress⚠️</Heading>
      <Paragraph>
        github 👉{' '}
        <Anchor href={process.env.GITHUB_URL}>
          help hack covid!
        </Anchor>
      </Paragraph>
      <Paragraph>
        slack 👉{' '}
        <Anchor href={process.env.SLACK_URL}>
          join on slack!
        </Anchor>
      </Paragraph>
    </Box>
  </Page>
);
