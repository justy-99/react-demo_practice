import React, { Component } from 'react'

import Count from './containers/Count/index'
import Person from './containers/Person/index.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        App....
        <Count/>
        <hr />
        <Person/>
      </div>
    )
  }
}
