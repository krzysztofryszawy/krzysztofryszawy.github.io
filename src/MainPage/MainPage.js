import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProjectBig from './components/ProjectBig/ProjectBig';
import SmallProjects from './components/SmallProjects/SmallProjects';
import Header from './components/Header/Header';
import Decor from './components/Decor/Decor';
import NavBar from './components/NavBar/NavBar';

import database_json from '../database/database.json';

const styles = theme => ({
  '@global': {
    a: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }
});

const databaseBigProjects = database_json[0];

class MainPage extends Component {
  render() {
    return (
      <div
        style={{ background: 'linear-gradient(to right, #ece9e6, #ffffff)' }}
      >
        <CssBaseline />
        <NavBar />
        <Header img={'header_back'} />
        <Decor id={'projects'} />
        <ProjectBig {...databaseBigProjects.React_reserved} />
        <ProjectBig {...databaseBigProjects.React_business} />
        <ProjectBig {...databaseBigProjects.React_calories} />
        <ProjectBig {...databaseBigProjects.React_travel_weather} />
        <ProjectBig img={'project3'} />
        <ProjectBig img={'project3'} />
        <Decor id={'smallProjects'} />
        <SmallProjects />
      </div>
    );
  }
}

export default withStyles(styles)(MainPage);
