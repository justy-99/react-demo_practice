import React, { PureComponent } from 'react'
import { AppWrapper,SectionWrapper } from './style'

export class App extends PureComponent {

  state = {
    size: 30
  }

  render() {
    const { size, color='' } = this.state
    return (
      <AppWrapper>
        <div>
          <div className='lan'>我是懒大王</div>
          <div className='mei'>沸羊羊真讨厌，喜羊羊真厉害</div>
          <SectionWrapper size={size} color={color}>
            <h2 className='title'>我是标题</h2>
            <p className='content'>我是内容, 哈哈哈</p>
            <button onClick={e => this.setState({color: "green"})}>修改颜色</button>
          </SectionWrapper>
        </div>
      </AppWrapper>
    )
  }
}

export default App