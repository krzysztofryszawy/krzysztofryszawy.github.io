import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SingleSmallProject from './SingleSmallProject/SingleSmallProject';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 3
    },
    [theme.breakpoints.up('md')]: {
      width: '80vw',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  item: {
    margin: theme.spacing.unit,
    cursor: 'pointer'
  },
  imgClass: {
    maxWidth: '100%',
    transition: 'opacity ease-in-out .3s'
  }
});

const SmallProjects = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-end"
          spacing={0}
        >
          <SingleSmallProject img={'project2'} />
          <SingleSmallProject img={'project3'} />
          <SingleSmallProject img={'React_reserved'} />
          <SingleSmallProject img={'project2'} />
          <SingleSmallProject img={'project3'} />
          <SingleSmallProject img={'React_reserved'} />
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(SmallProjects);
