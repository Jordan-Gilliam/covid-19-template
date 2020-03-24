import React from 'react';
import { Heading } from 'grommet';
import { Spinning } from 'grommet-controls';
import { useQuery } from 'react-query';

import { columns } from './columns';
import { fetchStates } from '../../data/api';
import Section from '../../components/Layout/Section';
import DataTable from '../../components/DataTable';

const StatesDataTable = () => {
  const { status, data, error } = useQuery('all-states-data', fetchStates);

  return (
    <Section>
      <Heading alignSelf="center">States</Heading>
      {status === 'loading' ? (
        <Spinning kind="cube-grid" color="accent-3" size="xlarge" />
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <DataTable
        columns={columns}
        data={data}
        caseTotal={46145}
        deathTotal={582}
      />
      )}
    </Section>
  );
};

export default StatesDataTable;
