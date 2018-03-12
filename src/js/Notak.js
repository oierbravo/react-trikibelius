import React from 'react';
import ReactDOM from 'react-dom';
import Nota from './Nota'

class Notak extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notak: props.notak
    };

  }
  render() {
    const listNotak = this.state.notak.map((val) =>
      <Nota zenbakia={val.zenbakia} type={val.type} norabidea={val.norabidea} />
      );
    return (
      <div className="sheet-notak">
        {listNotak}
      </div>
    );
  }
}

export default Notak
