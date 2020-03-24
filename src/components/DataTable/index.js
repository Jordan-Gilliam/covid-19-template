import React, { useState, useEffect } from 'react';
import { Box, DataTable as GrommetDataTable } from 'grommet';

const DataTable = ({ data, columns, caseTotal, deathTotal }) => {
  const [newDataArr, setDataArr] = useState([]);

  const nArr = data.map(n => ({
    ...n,
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
