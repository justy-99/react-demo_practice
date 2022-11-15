import React, { PureComponent } from 'react'
import { AppWrapper } from './style'

export class App extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <div>
          <div className='lan'>我是懒大王</div>
          <div className='mei'>沸羊羊真讨厌，喜羊羊真厉害</div>
        </div>
      </AppWrapper>
    )
  }
}

export default App