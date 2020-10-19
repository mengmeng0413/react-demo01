import React from 'react'
import m from '../../../material/material'

class BaseInput extends React.Component {
  constructor(props){
    super(props);
    this.valChange = this.valChange.bind(this)
  }
  valChange(event){
    this.props.valueChange(event.target.value)
  }
  render(){
    return(
      <div style={{margin: '10px'}}>
        <m.TextField
          id="outlined-helperText"
          label="输入数字"
          variant="outlined"
          value={this.props.number}
          onChange={this.valChange}
        />
      </div>
    )
  }
}
class Muti extends React.Component {
  constructor(props){
    super(props);
    this.state={
      num: '',
      type: ''
    }
  }
  valChange(val,type){
    this.setState({
      num: val,
      type: type
    })
  }

  render(){
    let numOne;
    let numTwo;
    if(this.state.type === 'one'){
      numOne = this.state.num;
      numTwo = numOne*2 || ''
    }else{
      numTwo = this.state.num;
      numOne = numTwo/2 || ''
    }
    return(
       <div>
         <p>输入一个数字，计算该数字*2的结果,显示在下面的输入框里：</p>
         <BaseInput type='one' number={numOne} valueChange={(val)=>{this.valChange(val,'one')}}/>
         <p>输入一个数字，计算该数字/2的结果，显示在上面的输入框里：</p>
         <BaseInput type='two' number={numTwo} valueChange={(val)=>{this.valChange(val,'two')}}/>
       </div>
    )
  }
}

export default Muti