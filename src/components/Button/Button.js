import React from 'react';
import Element from "../Element/Element";

// noinspection JSValidateTypes
class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentWillUnmount() {
    console.log('component Will Mount')
    alert('Component is Hidden')
  }

  componentDidMount() {
    console.log('component Did Mount')


    const url = 'https://jsonplaceholder.typicode.com/todos/'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({
          data: data
        })
      })
    alert('Component is not Hidden')
  }

  render() {
    return (
      <div>
        Button
        <h3>
          {this.state.data
            ? <ul>{this.state.data.map(element=>{
              const {id, title} = element;
              return <Element key={id} title={title}/>
              }
            )}</ul>
            : 'Loading...'
          }
        </h3>
      </div>
    )
  }
}


export default Button;