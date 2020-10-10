import React from 'react'
import m from '../../../material/material'


class Tick extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString()
    }
  }
  componentDidMount(){
    this.timeID = setInterval(()=>{
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    },1000)
  }

  compomentWillUnmount(){
    clearInterval(this.timeID)
  }

  render(){
    return(
      <div>
        <h4>hello,world!</h4>
        <h5>it is {this.state.date}.</h5>
      </div>
    )
  }
}

class Toggle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn:true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }
  render(){
    return (
      <m.Button variant="outlined" color="primary" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </m.Button>
    )
  }
}

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
        <hr/>
        <Tick/>
        <hr/>
        <Toggle/>
      </div>
    )
  }
}

export default Son