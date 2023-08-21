import React, { FC } from 'react';
import { Divider, Paper, Typography } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const AppContainer: FC<Props> = React.memo(({ children }) => {
  return (
    <Paper
      elevation={10}
      style={{
        padding: '20px',
        width: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Typography
        variant="h2"
        style={{ textAlign: 'center', marginBottom: '16px' }}
      >
        Users` board
      </Typography>

      {children}

      <Divider />
    </Paper>
  );
});
