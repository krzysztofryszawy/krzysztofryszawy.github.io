import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SingleSmallProject from './SingleSmallProject/SingleSmallProject';
import database_json from '../../../database/database.json';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 1
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
  }
});

const SmallProjects = props => {
  const databaseSmallProjects = database_json[1];
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
          <SingleSmallProject {...databaseSmallProjects.X8_BMW} />
          <SingleSmallProject {...databaseSmallProjects.X6_Berlin_tour} />
          <SingleSmallProject {...databaseSmallProjects.X5_toscana} />
          <SingleSmallProject {...databaseSmallProjects.X3_Berliner_fest} />
          <SingleSmallProject {...databaseSmallProjects.X2_media_agency} />
          <SingleSmallProject {...databaseSmallProjects.X1_position_fixed} />
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(SmallProjects);
