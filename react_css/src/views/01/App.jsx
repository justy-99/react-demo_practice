import React, { PureComponent } from 'react'

export class App extends PureComponent {

  state = {
    titleColor: 'red'
    
  }

  render() {
    return (
      <div style={{color: `${this.state.titleColor}`}}>App</div>
    )
  }
}

export default App