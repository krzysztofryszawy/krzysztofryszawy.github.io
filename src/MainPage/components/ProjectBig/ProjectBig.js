import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginTop: '3rem',
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
    margin: theme.spacing.unit
  },
  imgClass: {
    maxWidth: '100%',
    transition: 'opacity ease-in-out .2s',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.9
    }
  },
  secret: {
    transition: 'all ease-out .3s',
    height: 0,
    opacity: 0
  },
  clicked: {
    height: '10rem',
    opacity: 1
  }
});

class ProjectBig extends Component {
  state = {
    clicked: null
  };

  render() {
    const {
      classes,
      category,
      name,
      details,
      technologies,
      secret,
      img
    } = this.props;
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
                {name}
              </Typography>
              <Typography variant="body1">{category}</Typography>
              <Typography color="textSecondary" variant="body2">
                {details}
              </Typography>
            </Grid>
            <Grid className={classes.item} item sm={5} xs={12}>
              <Typography variant="body1">Technologies</Typography>
              <Typography color="textSecondary" variant="body2">
                {technologies}
              </Typography>
            </Grid>
            <Grid className={classes.item} item xs={12}>
              <Typography
                className={
                  this.state.clicked
                    ? `${classes.secret} ${classes.clicked}`
                    : classes.secret
                }
                color="textSecondary"
                variant="body2"
              >
                {secret}
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
              <div
                onClick={() => this.setState({ clicked: !this.state.clicked })}
                className={classes.imageContainer}
              >
                <img
                  className={classes.imgClass}
                  src={require(`../../../assets/images/${img}.jpg`)}
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ProjectBig);
