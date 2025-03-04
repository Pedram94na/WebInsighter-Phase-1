import React from 'react';
import { Grid, Box } from '@mui/material';

export default function NavigationStructure(props) {
  return (
    <nav>
      <Grid container alignItems="center" justifyContent="space-between">
        {/* Left Section (Logo) */}
        <Grid item xs={4} sm={3}>
          <div className='top-logo'>{props.left}</div>
        </Grid>

        {/* Center Section (Navigation Items) */}
        <Grid item xs={8} sm={6} lg={5} container justifyContent="center">
          {props.center}
        </Grid>
      </Grid>
    </nav>
  );
}
