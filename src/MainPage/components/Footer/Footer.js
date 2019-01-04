import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Links from './Links/Links';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '10rem',
    minHeight: '60vh',
    background: 'linear-gradient(to right, #abbaab, #ffffff)'
  },
  item: {
    margin: theme.spacing.unit
  },
  imageContainer: {
    marginTop: '10rem'
  },
  titleContainer: {
    fontWeight: 'bold',
    marginLeft: '6rem',
    padding: '2rem',
    right: 0,
    maxWidth: '60rem',
    fontSize: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      marginLeft: 0,
      padding: '1rem'
    }
  },
  textTopContainer: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    padding: '3rem',
    maxWidth: '55rem',
    fontSize: '1.5rem',
    marginTop: '-5rem',
    position: 'absolute',
    right: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: '1rem'
    }
  }
});

const Header = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          Hi.
          <span style={{ backgroundColor: '#fbc00c' }}> Thanks </span>for visit,
          if you want contact, feel free to
          <span style={{ backgroundColor: '#fbc00c' }}> email or call</span>. I
          am interested in to participate in front-end projects, especially
          using my experience with
          <span style={{ backgroundColor: '#fbc00c' }}> React.js</span>
        </div>
        <div className={classes.imageContainer}>
          <div className={classes.textTopContainer}>
            "Walking on water and developing software from a specification are
            easy,{' '}
            <span style={{ backgroundColor: '#fbc00c' }}>
              if both are frozen{' '}
            </span>
            ."
            <p style={{ fontSize: '.7rem', textAlign: 'right' }}>
              Edward V Berard
            </p>
          </div>
          <Links />
        </div>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Header);
