import React from 'react';
import { Button } from 'grommet';


const FormButton = ({ status }) => {
  return (
    <div>
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
    </div>
  );
};

export default FormButton;
