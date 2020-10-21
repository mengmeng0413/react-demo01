import React from 'react'
import "./css/extend.less"

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function Contacts(){
  return (
    <p>'i am contacts'</p>
  )
}

function Chat(){
  return (
    <p>'i am chat'</p>
  )
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  )
}

function Dialog(props) {
  return(
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p class="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }
  handleChange(e) {
    this.setState({login: e.target.value});
  }
  handleSignUp() {
    alert(`Welcome aboard,${this.state.login}!`);
  }
  render() {
    return (
      <Dialog title="Mars Exploration program"
              message="How should we refer to you?"
      >
        <input value={this.state.login}
                onChange={this.handleChange}/>
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    )
  }
}

function WelecomeDialog() {
  return(
    <div>
      <SignUpDialog />
      <hr/>
      <SplitPane left={<Contacts />} right={<Chat />}/>
    </div>
  )
}

export default WelecomeDialog