import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginTop: '3rem',
    // width: 'auto',
    // height: '70vh',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit
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
    // '&:hover': {
    //   opacity: 0.95
    // }
  }
});

const ProjectBig = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-end"
          spacing={8}
        >
          <Grid className={classes.item} item sm={5} xs={12}>
            <Typography variant="h4" component="h4">
              React & Material-UI
            </Typography>
            <Typography variant="body1">
              Company Booking Platform App
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Multi-Company && Multi-User App for internal booking cars,
              conference rooms, equipment etc.
            </Typography>
          </Grid>
          <Grid className={classes.item} item sm={5} xs={12}>
            <Typography variant="body1">Technologies</Typography>
            <Typography color="textSecondary" variant="body2">
              React.js, Context API, JSX, Axios, Firebase, Material-UI
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={24}
        >
          <Grid className={classes.item} item sm={12} xs={12}>
            <div className={classes.imageContainer}>
              <img
                className={classes.imgClass}
                src={require(`../../../assets/images/${props.img}.jpg`)}
                alt=""
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(ProjectBig);
