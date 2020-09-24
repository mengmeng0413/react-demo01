import React from 'react'
import Son from './inner/Son'
import m from '../../material/material'

class Father extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message: "this is some message form father for son",
      val: 'i am father'
    }
  }
  minus(){
    console.log('子调父方法: 8-2=',8-2)
  }
  getSonMethods(){
    this.refs.son.add()
  }
  getSonVal(){
    console.log(this.refs.son.state.val)
  }
  render(){
    return (
      <div>
        <m.Button variant="contained" color="primary" onClick={() => {this.getSonMethods()}}>父调用子的方法</m.Button>
        <m.Button variant="contained" color="secondary" onClick={() => {this.getSonVal()}}>父获取子变量的值</m.Button>
        <Son ref="son" msg={this.state.message} minus={this.minus} val={this.state.val}/>
      </div>
    )
  }
}

export default Father