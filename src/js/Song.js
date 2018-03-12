import React from 'react';
import ReactDOM from 'react-dom';
import Notak from './Notak'
import SheetInfo from './SheetInfo'

class Song extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      song: props.song
    };
    console.log(this,'song');
  }

  render() {
  
    return (

            <Notak notak={this.state.song.notak}/>

    );
  }
}

export default Song
