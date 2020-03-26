import { Anchor, Box, Paragraph } from 'grommet';
import FormMain from '../organisms/Forms/FormMain';
import MainHeading from '../organisms/Forms/MainHeading'
import Section from '../shared/Section';

export default () => (
  <Box align="center" margin="large">
    <MainHeading size="xlarge"/>
    <Paragraph>
      github 👉 <Anchor href={process.env.GITHUB_URL}>help hack covid!</Anchor>
    </Paragraph>
    <Section>
      <FormMain />
    </Section>
  </Box>
);
