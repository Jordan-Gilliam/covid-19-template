import React, { useState, useEffect } from 'react';
import { Box, DataTable as GrommetDataTable } from 'grommet';
import getColumns from './getColumns';

const DataTable = ({ data, location, caseTotal, deathTotal }) => {
  const [newDataArr, setDataArr] = useState([]);
  const { columns } = getColumns(location)

  const nArr = data.map(n => ({
    ...n,
    location,
    caseRatio: (n.cases / caseTotal) * 100,
    deathRatio: (n.deaths / deathTotal) * 100
  }));

  useEffect(() => {
    setDataArr(nArr);
  }, [data]);

  return (
    <Box align="center" pad="large">
      <GrommetDataTable columns={columns} data={newDataArr} size="medium" />
    </Box>
  );
};

export default DataTable;
