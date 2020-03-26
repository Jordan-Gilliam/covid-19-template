import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import { Box, Heading, Paragraph } from 'grommet';
import isLightContext from '../../shared/isLightContext';

export const StyledHeading = styled(Heading)`
  font-weight: 200;
`;

const MainHeading = ({ size, ...rest }) => {
  const { isLight } = useContext(isLightContext);

  return (
    <Fragment>
      <Box direction="row" {...rest}>
        <StyledHeading
          color={isLight ? 'dark-1' : 'status-error'}
          size={size}
        >
          pls
        </StyledHeading>
        <StyledHeading
          color={isLight ? 'status-error' : 'status-warning'}
          size={size + 50}
        >
          Stay
        </StyledHeading>
        <Heading color={isLight ? 'status-warning' : ''} size={size}>
          Home
        </Heading>
      </Box>
      <Paragraph margin={{ top: 'none' }} textAlign="center" size="xxlarge">
        check here for any local <b>Covid-19</b> news.
      </Paragraph>
    </Fragment>
  );
};
export default MainHeading;
