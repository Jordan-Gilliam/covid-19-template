import React from "react";
import { Anchor, Box, Paragraph } from "grommet";

const Tile = ({ children, action, summary, ...rest }) => (
  <Box basis="medium" align="center" margin="medium">
    <Box height="small" align="center" justify="center" {...rest}>
      {children}
    </Box>
    <Paragraph size="large" textAlign="center">
      {summary}
    </Paragraph>
    <Box align="center">
      <Anchor href="/" alignSelf="center">
        {action}
      </Anchor>
    </Box>
  </Box>
);

export { Tile };
