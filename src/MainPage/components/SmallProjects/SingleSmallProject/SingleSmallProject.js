import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  item: {
    padding: theme.spacing.unit * 3,
    cursor: 'pointer'
  },
  imgClass: {
    maxWidth: '100%',
    transition: 'opacity ease-in-out .3s'
  }
});

const SingleSmallProject = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid className={classes.item} item xs={6}>
        <div className={classes.imageContainer}>
          <img
            className={classes.imgClass}
            src={require(`../../../../assets/images/${props.img}.jpg`)}
            alt=""
          />
        </div>
        <Typography variant="h6">Company Booking Platform App</Typography>
        <Typography color="textSecondary" variant="body2">
          Multi-Company && Multi-User App for internal booking cars, conference
          rooms, equipment etc.
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(SingleSmallProject);
