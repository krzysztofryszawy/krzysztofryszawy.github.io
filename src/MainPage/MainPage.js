import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProjectBig from './components/ProjectBig/ProjectBig';
import SmallProjects from './components/SmallProjects/SmallProjects';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
        <Decor id={'projects'} name={'Projects'} />
        <ProjectBig {...databaseBigProjects.React_reserved} />
        <ProjectBig {...databaseBigProjects.React_business} />
        <ProjectBig {...databaseBigProjects.React_calories} />
        <ProjectBig {...databaseBigProjects.React_travel_weather} />
        <ProjectBig {...databaseBigProjects.React_StarWarsFlirt} />
        <ProjectBig {...databaseBigProjects.React_CarApp} />
        <Decor id={'smallProjects'} name={'Small Projects'} />
        <SmallProjects />
        <Decor id={'contact'} name={'Contact'} />
        <Footer img={'header_back'} />
      </div>
    );
  }
}

export default withStyles(styles)(MainPage);
