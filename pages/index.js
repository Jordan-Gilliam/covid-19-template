import { Anchor, Box, Heading, Paragraph } from 'grommet';
import Page from '../components/Page';
import FormMain from '../components/FormMain';
import Section from '../components/Layout/Section'

export default () => (
  <Page pageTitle="home">
    <Box align="center" margin="large">
      <Heading>COVID SUPPORT</Heading>
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
      <Section>
          <FormMain />
      </Section>
    </Box>
  </Page>
);
