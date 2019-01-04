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
  const { classes, name, details, img } = props;

  return (
    <React.Fragment>
      <Grid className={classes.item} item xs={6}>
        <div className={classes.imageContainer}>
          <img
            className={classes.imgClass}
            src={require(`../../../../assets/images/${img}.jpg`)}
            alt=""
          />
        </div>
        <Typography variant="body1">{name}</Typography>
        <Typography color="textSecondary" variant="body2">
          {details}
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(SingleSmallProject);
