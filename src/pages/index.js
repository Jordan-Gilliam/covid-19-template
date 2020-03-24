import { Anchor, Box, Heading, Paragraph } from 'grommet';
import FormMain from './FormMain/FormMain';
import Section from '../_app/Section';

export default () => (
  <Box align="center" margin="large">
    <Heading>COVID SUPPORT</Heading>
    <Paragraph>
      github 👉 <Anchor href={process.env.GITHUB_URL}>help hack covid!</Anchor>
    </Paragraph>
    <Paragraph>
      slack 👉 <Anchor href={process.env.SLACK_URL}>join on slack!</Anchor>
    </Paragraph>
    <Section>
      <FormMain />
    </Section>
  </Box>
);
