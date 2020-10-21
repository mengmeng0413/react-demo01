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

function WelecomeDialog() {
  return(
    <div>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welecome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
      <SplitPane left={<Contacts />} right={<Chat/>}/>
    </div>
    
  )
}

export default WelecomeDialog