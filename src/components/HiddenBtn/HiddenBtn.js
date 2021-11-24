import React from 'react';
import Button from "../Button/Button";

// noinspection JSValidateTypes
class HiddenBtn extends React.Component {

  state = {
    isHidden: false
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({isHidden: !this.state.isHidden})}>
          Click Here
        </button>
        {this.state.isHidden ? "Hidden" : <Button/>}
      </div>
    );
  }

}


export default HiddenBtn;