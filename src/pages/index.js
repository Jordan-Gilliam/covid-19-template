import { Anchor, Box, Paragraph } from 'grommet';
import FormMain from './FormMain/FormMain';
import MainHeading from './FormMain/MainHeading'
import {Section} from '../_app/Section';

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
