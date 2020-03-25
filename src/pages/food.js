import React, { Fragment } from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';
import data from './Cards/data';
import Card from './Cards/Card';
import CardContent from './Cards/CardContent';
import CardDescription from './Cards/CardDescription';

export default () => (
  <Fragment>
    <ResponsiveContext.Consumer>
      {size => (
        <Grid
          align="start"
          columns={size !== 'small' && { count: 'fill', size: 'medium' }}
          gap="medium"
        >
          {Object.entries(data).map(([_, business]  ) => (
            <Box align="center" margin="large">
              <Card key={business.key} business={business}>
                <CardContent
                  hours={business.hours}
                  category={business.category}
                  hours={business.hours}
                  name={business.name}
                >
                  <CardDescription description={business.description} />
                </CardContent>
              </Card>
            </Box>
          ))}
        </Grid>
      )}
    </ResponsiveContext.Consumer>
  </Fragment>
);
