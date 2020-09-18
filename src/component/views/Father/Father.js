import React from 'react'
import Son from './inner/Son'

class Father extends React.Component{
  render(){
    return (
      <div>
        <Son />
      </div>
    )
  }
}

export default Father