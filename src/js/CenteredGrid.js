import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Song from './Song';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    maxWidth: 400,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;


  return (
    <div className={classes.root}>
    <Grid container justify={'center'} spacing={24}>
      <Grid item xs={12}>
          <Grid container justify={'center'} spacing={24}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Song song={props.song}/>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
