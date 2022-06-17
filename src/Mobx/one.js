import React, { Component } from 'react'

export default class One extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  render() {
    return (
      <div>
          <h1>one</h1>
          <button onClick={()=>{this.props.history.push('/home')}}>
              jump to home
          </button>
      </div>
    )
  }
}
