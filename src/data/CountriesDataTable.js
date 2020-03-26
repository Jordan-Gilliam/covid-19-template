import React from 'react';
import { Heading } from 'grommet';
import { Spinning } from 'grommet-controls';
import { useQuery } from 'react-query';

import { fetchCountries } from './shared/api';
import Section from '../shared/Section';
import DataTable from './shared/DataTable';

const CountriesDataTable = () => {
  const { status, data, error } = useQuery(
    'all-countries-data',
    fetchCountries
  );

  return (
    <Section>
      <Heading alignSelf="center">Countries</Heading>
      {status === 'loading' ? (
        <Spinning kind="cube-grid" color="accent-3" size="xlarge" />
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <DataTable
            location="country"
          data={data}
          caseTotal={378547}
          deathTotal={16505}
        />
      )}
    </Section>
  );
};

export default CountriesDataTable;
