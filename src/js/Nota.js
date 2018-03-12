import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/nota.scss';


class Nota extends React.Component {
  // TODO: remove the constructor
  constructor(props) {
    super(props);
    console.log(props,'Nota');
  }

  render() {
    const cssArray = [this.props.type,this.props.norabidea,'circle']
    const cssClass =  cssArray.join(' ');  ;
    return (
      <div className={cssClass}>
        {this.props.zenbakia}
      </div>
    );
  }
}
export default Nota
