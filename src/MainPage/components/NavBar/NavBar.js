import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    transition: 'all .3s ease-in-out',
    height: '3rem',
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'none',
    position: 'fixed',
    top: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontWeight: 800,
    userSelect: 'none',
    zIndex: '99999',
    '&:hover': {
      backgroundColor: 'white'
    },
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
      color: 'white',
      transform: 'translateY(15px)'
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
    color: '#202020',
    transform: 'translateY(5px)'
  },
  onTop: {
    height: '6rem',
    backgroundColor: 'white',
    justifyContent: 'center'
    // fontSize: '1.2rem'
  }
});

class NavBar extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlescroll);
  }

  handleScroll = () => {
    this.setState({ onTop: true });
    let offset = window.scrollY;

    if (offset >= 300) {
      this.setState({ onTop: false });
    }
  };

  state = {
    onTop: true
  };

  // setNavClassHandler = () => {
  //   let navClass = 'classes.root';
  //   navClass += this.state.onTop ? ' classes.onTop' : '';
  //   // console.log(navClass);
  //   return navClass;
  // };

  render() {
    const { classes } = this.props;

    return (
      <div
        className={
          this.state.onTop ? `${classes.root} ${classes.onTop}` : classes.root
        }
      >
        <div className={classes.link}>
          <a href="#">HOME</a>
        </div>
        <div className={classes.link}>
          <a href="#projects">PROJECTS</a>
        </div>
        {/* <div className={classes.link}>
          <a href="#about">ABOUT ME</a>
        </div> */}
        <div className={classes.link}>
          <a href="#contact">CONTACT</a>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
