import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Spa from '@material-ui/icons/Spa';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    // marginTop: '3rem',
    // width: 'auto',
    // height: '70vh',

    [theme.breakpoints.up('md')]: {
      width: '80vw',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }
});

const Decor = props => {
  const { classes } = props;

  return (
    <div id={props.id} className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" component="h4">
            Projects #
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Decor);
