import React from 'react';
import ReactDOM from 'react-dom';
class SheetInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songTitle: props.song.songTitle,
    };
    console.log(this,'SheetInfo');
  }


  render() {
    return (
      <div className="sheet-info">
        <div>{this.state.songTitle}</div>
      </div>
    );
  }
}
export default SheetInfo
