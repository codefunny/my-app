import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
  render() {
    return (
      <div>
          <h1>home</h1>
          <button onClick={()=>{this.props.history.push('/one')}}>
              jump to one
          </button>
      </div>
    )
  }
}
