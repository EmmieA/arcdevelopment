import React from 'react';
import { Link } from 'react-router-dom';

import { RouteContext } from '../Contexts/RouteContext';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({}));

const Services = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          container
          direction="row"
          justify={viewportIsSmallOrBelow ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              textAlign: viewportIsSmallOrBelow ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Extend functionality. Extend access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{viewportIsSmallOrBelow ? null : <br />} with
              either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              onClick={() => {
                handleSetNavChoice(5);
                handleSetSelectedSubMenuItem(2);
              }}
              variant="outlined"
              size="small"
              className={classes.learnButtonSecondary}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
            </Button>
          </Grid>
          <Grid item style={{ marginLeft: viewportIsSmallOrBelow ? 0 : '5em' }}>
            <img className={classes.mobileAppsIcon} alt="mobile phone icon" src={mobileAppsIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
