import React, { Component } from 'react'
import { connect } from 'react-redux'
import {nanoid} from 'nanoid'

import { createAddPersonAction } from '../../redux/actions/person'


class PersonUI extends Component {

  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    if(!name || !age) return
    const personObj = {
      id: nanoid(),
      name,
      age
    }
    this.props.addPersonAction(personObj)

    this.nameNode.value = ''
    this.ageNode.value = ''
  }

  render() {
    const {person, count} = this.props
    
    return (
      <div>
        <h1>Person...</h1>
        <h2>count:{count}</h2>
        <input ref={(c) => this.nameNode = c} type="text" placeholder='名字'/>
        <input ref={(c) => this.ageNode = c} type="text" placeholder='年龄'/>
        <button onClick={this.addPerson}>加人</button>
        <hr />
        <ul>
          {
            person.map( item => (
              <li key={item.id}>
                <span>{item.name}----{item.age}</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({person:state.person,count: state.count}),
  {
    addPersonAction:createAddPersonAction
  }
)(PersonUI)