import React from 'react';
import { WorldMap } from 'grommet'

const Map = () => {
  return (
    <div>
      <WorldMap
        color="status-critical"
        continents={[
          {
            name: 'North America',
            color: 'status-warning',
            onClick: name => {}
          }
        ]}
        // TODO: Dispatch data fetch
        onSelectPlace={(lat, lon) => {}}
        selectColor="accent-2"
      />
    </div>
  );
};

export default Map;
