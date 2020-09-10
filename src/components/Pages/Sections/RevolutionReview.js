import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import review from '../../../assets/reviewIcon.svg';

const RevolutionReview = ({ classes }) => {
  return (
    <Grid
      item
      container
      direction="row"
      alignItems="center"
      className={[classes.wideContainer, classes.backgroundMockup]}
    >
      <Grid item container direction="column" lg>
        <Grid item>
          <Typography variant="h4" gutterBottom className={classes.blackText}>
            Review
          </Typography>
        </Grid>
        <Grid item className={classes.narrowParagraph}>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any
            changes you may want or any ideas you may have come up with before any heavy lifting has been done.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went
            into each screen and every anticipated feature.
          </Typography>
          <Typography variant="body1" paragraph className={classes.whiteText}>
            Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty,
            fine-details of design.{' '}
          </Typography>
        </Grid>
      </Grid>
      <Grid item lg style={{ alignSelf: 'center' }}>
        <img src={review} alt="magnifying glass" />
      </Grid>
    </Grid>
  );
};

export default RevolutionReview;
