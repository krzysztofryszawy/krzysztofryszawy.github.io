import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    transition: 'all .3s ease-in-out',
    height: '30vh',
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#011118',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    fontWeight: 800,
    userSelect: 'none',
    zIndex: '99999',
    [theme.breakpoints.down(520)]: {
      justifyContent: 'space-evenly'
    }
  },
  link: {
    padding: '1rem',
    marginRight: '1rem',
    color: '#fbc00c',
    '&:hover': {
      backgroundColor: '#fbc00c',
      color: 'white'
      //   transform: 'translateY(15px)'
    },
    textAlign: 'center',
    transition: 'transform .2s ease-out',
    [theme.breakpoints.down(520)]: {
      padding: '.3rem',
      marginRight: 0,
      marginLeft: '.1rem',
      fontWeight: 500,
      fontSize: '.9rem'
    }
  },
  activeLink: {
    backgroundColor: '#fbc00c',
    color: '#202020'
    // transform: 'translateY(5px)'
  }
});

class Links extends React.Component {
  state = {
    onTop: true
  };

  render() {
    const { classes } = this.props;

    return (
      <div id="contact" className={classes.root}>
        <div className={classes.link}>
          <a target="_blank" href="https://www.linkedin.com/in/ryszawy/">
            LinkedIn
          </a>
        </div>
        <div className={classes.link}>
          <a target="_blank" href="https://github.com/krzysztofryszawy">
            gitHub
          </a>
        </div>
        <div className={classes.link}>
          <a href="mailto:Krzysztof.Ryszawy@gazeta.pl">email</a>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Links);
