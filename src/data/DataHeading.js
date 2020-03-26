import React, { useState, useEffect } from 'react';
import { Text, Box, WorldMap, ResponsiveContext } from 'grommet';
import Section from '../shared/Section';
import { useQuery } from 'react-query';
import { fetchAll } from './shared/api';

const DataHeading = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const { data = '' } = useQuery('fetch-all-cases', fetchAll);

  useEffect(() => {
    let timer = setTimeout(() => setFadeIn(true), 3500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const size = React.useContext(ResponsiveContext);

  return (
    <Section>
      <Box align="center" justify="start" pad="med">
        <Text
          size={size === 'small' ? '43px' : '77px'}
          color={fadeIn && data ? '' : 'status-critical'}
        >
          {fadeIn && data ? data.cases : 'Too Many'} <span>Cases</span>
        </Text>
        <Text
          size={size === 'small' ? '43px' : '77px'}
          color={fadeIn && data ? 'status-critical' : ''}
        >
          {fadeIn && data ? data.deaths : 'Too Many'} <span>Deaths</span>
        </Text>
      </Box>
      <Box margin="medium" pad="med">
        {size === 'small' || <WorldMap color={fadeIn && data ? 'status-critical' : ''} />}
      </Box>
    </Section>
  );
};

export default DataHeading;
