//import React from 'react';
//import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import CenteredGrid from './CenteredGrid'
import ButtonAppBar from './ButtonAppBar';
import 'typeface-roboto';
import '../scss/index.scss';
//import SimpleAppBar from './bar'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});




class SongPage extends React.Component {

  render (){
    const song = {
      title:"Gure super abestia",
      notak: [{zenbakia:23,norabidea:'ireki',type:'nota'},{type:'silence'},{zenbakia:22,norabidea:'itxi',type:'nota'}]
    }
      return (
        <div className="page">
          <ButtonAppBar song={song}/>
          <CenteredGrid song={song} />
        </div>
        )
  }
}
// ========================================

ReactDOM.render(
     <SongPage/>
    ,

  document.getElementById('root')
);
