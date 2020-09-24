import React from 'react'
import m from '../../../material/material'

class Son extends React.Component{
  constructor(props){
    super(props);
    this.state={
      val: 'i am son'
    }
  }
  add(){
    console.log('父调子方法: 8+2=',8+2)
  }
  getFatherMethods(){
    this.props.minus()
  }
  getFatherVal(){
    console.log(this.props.val)
  }
  render(){
    return (
      <div>
        <p>
          父向子传参：{this.props.msg}
        </p>
        <m.Button variant="outlined" color="primary" onClick={() => {this.getFatherMethods()}}>子调用父的方法</m.Button>
        <m.Button variant="outlined" color="primary" onClick={() => {this.getFatherVal()}}>子获取父变量的值</m.Button>
      </div>
    )
  }
}

export default Son