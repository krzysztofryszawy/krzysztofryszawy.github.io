import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Spa from '@material-ui/icons/Spa';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    // marginTop: '3rem',
    // width: 'auto',
    // height: '70vh',
    fontWeight: 'bold',
    fontSize: '3rem',
    backgroundColor: '#fbc00c',
    '&:hover': {
      color: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    }
  }
});

const Decor = props => {
  const { classes } = props;

  return (
    <div id={props.id} className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <div variant="h4" component="h4">
            {props.name}#
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Decor);
