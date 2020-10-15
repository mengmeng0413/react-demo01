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

function UserGreeting(props){
  return <h1>Welcome back!</h1>
}
function GuestGreeting(props){
  return <h1>Please sign up.</h1>
}
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting/>;
  }
  return <GuestGreeting/>;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick(){
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick(){
    this.setState({isLoggedIn: false});
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return(
      <div>
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        <p>
          {isLoggedIn
            ? <LogoutButton onClick={this.handleLogoutClick} />
            : <LoginButton onClick={this.handleLoginClick} />
          }
        </p>
      </div>
    )
    
    // let button;
    // if(isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick}/>;
    // }else{
    //   button = <LoginButton onClick={this.handleLoginClick}/>;
    // }
    // return(
    //   <div>
    //     <Greeting isLoggedIn={isLoggedIn}/>
    //     {button}
    //   </div>
    // )
  }
}

function WarningBanner(props) {
  if(!props.warn) {
    return null;
  }
  return (
    <div className="warning">
      Warning!
    </div>
  )
}
class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {showWarning:true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning 
    }));
  }
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning}/>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

function ListItem(props) {
  return <li>{props.value}</li>;
}
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => 
        <ListItem key={number.toString()} value={number}/>
      )}
    </ul>
  )
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('提交的名字：' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   <label>
      //     名字：
      //     <input type="text" value={this.state.value} onChange={this.handleChange} />
      //   </label>
      //   <input type="submit" value="提交"/>
      // </form>
      <div>
        <m.TextField 
          id="standard-search" 
          label="名字" 
          type="search" 
          value={this.state.value}
          onChange={this.handleChange}
        />
        <m.Button style={{marginLeft: '10px',marginTop: '10px'}} variant="outlined" color="primary" onClick={this.handleSubmit}>
          提交
        </m.Button>
      </div>
    )
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form>
        <label>
          参与：
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br/>
        <label>
          来宾人数：
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
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
        <Tick />
        <hr/>
        <Toggle />
        <hr/>
        <LoginControl />
        <hr/>
        <Page />
        <hr/>
        <NumberList numbers={[1,2,3,4,5]}/>
        <hr/>
        <NameForm />
        <hr/>
        <Reservation />
      </div>
    )
  }
}

export default Son