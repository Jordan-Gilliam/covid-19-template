import React from 'react';
import { Heading } from 'grommet';
import { Spinning } from 'grommet-controls';
import { useQuery } from 'react-query';

import { columns } from './columns';
import { fetchCountries } from '../../data/api';
import Section from '../../components/Layout/Section';
import DataTable from '../../components/DataTable';

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
          columns={columns}
          data={data}
          caseTotal={378547}
          deathTotal={16505}
        />
      )}
    </Section>
  );
};

export default CountriesDataTable;
