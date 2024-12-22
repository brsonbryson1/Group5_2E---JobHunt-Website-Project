import React from 'react';
import { Container, Typography } from '@mui/material';

const Users = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Users Page
      </Typography>
      <Typography variant="body1">
        This is the Users page. After logging in, users will be redirected here.
      </Typography>
    </Container>
  );
};

export default Users;
