import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BackgroundHeader from '../../../assets/images/header_back3.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
    marginTop: '3rem',
    minHeight: '60vh'
    // backgroundColor: 'pink'
  },
  item: {
    margin: theme.spacing.unit
  },
  imgClass: {
    maxWidth: '900px',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit
    }
  },
  imageContainer: {
    height: '60vh',
    backgroundImage: 'url(' + BackgroundHeader + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    marginTop: '10rem'
  },
  textTopContainer: {
    backgroundColor: 'white',
    // color: 'white',
    fontWeight: 'bold',
    padding: '2rem',
    maxWidth: '45rem',
    // height: '15rem',
    fontSize: '1.5rem',
    marginTop: '-5rem',
    position: 'absolute'
  },
  textBottomContainer: {
    backgroundColor: 'white',
    // color: 'white',
    fontWeight: 'bold',
    padding: '2rem',
    // left: '20%',
    right: 0,
    maxWidth: '45rem',
    // height: '15rem',
    fontSize: '1.5rem',
    marginTop: '50vh',
    position: 'absolute'
  }
});

const Header = props => {
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
          <Grid className={classes.item} item sm={5} xs={12}>
            <Typography variant="h4" component="h4">
              React
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.imageContainer}>
          <div className={classes.textTopContainer}>
            Lorem ipsum dolor{' '}
            <span style={{ backgroundColor: '#fbc00c' }}>
              sit amet consectetur{' '}
            </span>
            adipisicing elit. Ullam, itaque magnam repellendus!{' '}
            <span style={{ backgroundColor: '#fbc00c' }}>Sequi corporis </span>,
            quasi quos placeat.
          </div>
          <div className={classes.textBottomContainer}>
            Ipsum dolor{' '}
            <span style={{ backgroundColor: '#fbc00c' }}>consectetur </span>
            Ullam, magnam repellendus! , quos placeat.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Header);
