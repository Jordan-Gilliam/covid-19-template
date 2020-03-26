import React, { Fragment } from 'react';
import { Box, Grid, ResponsiveContext } from 'grommet';
import data from '../__mocks__/business-info-mock-data'
import Card from '../organisms/Cards/Card';
import CardContent from '../organisms/Cards/CardContent';
import CardDescription from '../organisms/Cards/CardDescription';

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
