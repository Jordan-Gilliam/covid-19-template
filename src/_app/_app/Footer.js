import React from 'react';
import { Anchor, Box, Footer as GrommetFooter } from 'grommet';

import { Slack, Instagram, Github } from 'grommet-icons';

const Footer = () => (
  <GrommetFooter align="center" justify="center" pad="large">
    <Box direction="row" gap="small">
      <Anchor
        a11yTitle="Share feedback on Github"
        href={process.env.GITHUB_URL}
        icon={<Github size="large" />}
      />
      <Anchor
        a11yTitle="Chat with us on Slack"
        href={process.env.SLACK_URL}
        icon={<Slack size="large" />}
      />
      <Anchor
        a11yTitle="Follow us on Instagram"
        href={process.env.INSTAGRAM_URL}
        icon={<Instagram size="large" />}
      />
    </Box>
  </GrommetFooter>
);

export default Footer;
