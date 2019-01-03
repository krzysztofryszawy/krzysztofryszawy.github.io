import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProjectBig from './components/ProjectBig/ProjectBig';
import Header from './components/Header/Header';

const styles = theme => ({});

class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header img={'header_back'} />
        <ProjectBig img={'React_reserved'} />
        <ProjectBig img={'project2'} />
        <ProjectBig img={'project3'} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(MainPage);
