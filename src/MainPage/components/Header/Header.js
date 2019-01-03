import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BackgroundHeader from '../../../assets/images/header_back9.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    // padding: theme.spacing.unit * 3,
    paddingTop: '10rem',
    minHeight: '60vh',
    // background: 'linear-gradient(to right, #abbaab, #ffffff)'
    background: 'none'
  },
  item: {
    margin: theme.spacing.unit
  },
  imageContainer: {
    height: '80vh',
    backgroundImage: 'url(' + BackgroundHeader + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat',
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
  },
  textBottomContainer: {
    backgroundColor: 'white',
    fontWeight: 'bold',
    padding: '3rem',
    right: 0,
    maxWidth: '55rem',
    fontSize: '1.5rem',
    marginTop: '-5rem',
    marginBottom: '3rem'
  }
});

const Header = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          JSX, <span style={{ backgroundColor: '#fbc00c' }}>CSS Modules</span>,
          HTTP request - Axios, Component lifecycle, HOCs, React router,{' '}
          <span style={{ backgroundColor: '#fbc00c' }}>Context API</span>, error
          handlig,{' '}
          <span style={{ backgroundColor: '#fbc00c' }}>Material-UI</span>
        </div>
        <div className={classes.imageContainer}>
          <div className={classes.textTopContainer}>
            "A good designer must rely on experience, on precise, logic
            thinking; and on pedantic exactness.{' '}
            <span style={{ backgroundColor: '#fbc00c' }}>
              No magic will do{' '}
            </span>
            ."
            <p style={{ fontSize: '.7rem', textAlign: 'right' }}>
              Niklaus Wirth
            </p>
          </div>
          {/* <div className={classes.textTopContainer}>
            "Walking on water and developing software from a specification are
            easy,{' '}
            <span style={{ backgroundColor: '#fbc00c' }}>
              if both are frozen{' '}
            </span>
            ."
            <p style={{ fontSize: '.7rem', textAlign: 'right' }}>
              Edward V Berard
            </p>
          </div> */}
        </div>
        <div className={classes.textBottomContainer}>
          <span style={{ backgroundColor: '#fbc00c' }}>IT professional </span>{' '}
          experienced in implementing dedicated systems and enthusiastic to
          learn new technologies. Always open to participate in exciting front
          end projects that focus on web GUI{' '}
          <span style={{ backgroundColor: '#fbc00c' }}>
            React.js, Material-UI, ES6{' '}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Header);
