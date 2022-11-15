import React, { Fragment, PureComponent } from 'react'
import './App.css'

export class App extends PureComponent {

  state = {
    titleColor: 'red'
    
  }

  render() {
    return (
      <Fragment>
        <div style={{color: `${this.state.titleColor}`}}>App</div>

        <div className='content'>
          内容
        </div>
      </Fragment>
    )
  }
}

export default App