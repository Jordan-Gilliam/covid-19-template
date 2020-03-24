import React from 'react';
import { Button, Box } from 'grommet';

const FormButton = ({ status }) => {
  return (
    <Box>
      {
        {
          idle: (
            <Button
              primary
              type="submit"
              hoverIndicator="background"
              label="Submit"
            />
          ),
          success: (
            <Button
              primary
              type="submit"
              hoverIndicator="background"
              label="Thank you"
              color="status-ok"
            />
          ),
          error: (
            <Button
              primary
              type="submit"
              hoverIndicator="background"
              label="Error"
              color="status-error"
            />
          )
        }[status]
      }
    </Box>
  );
};

export default FormButton;
