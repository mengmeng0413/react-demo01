import React from 'react'
import NameCard from '../NameCard'

function NumList(props){
    const numberList = props.number.map((num) => 
        <li key={num}>{num}</li>
    )
    return numberList;
}
class Li extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            number: [1,2,3,4,5]
        }
    }
    render() {
        return (
            <div style={{padding: '10px 0 0 10px'}}>
                <ul>
                    <NumList number={this.state.number}/>
                </ul>
            </div>
            
        )
    }
}

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}
function WelecomeDialog() {
    return (
        <Dialog 
            title="Welecome" 
            message="Thank you for visiting our spacecraft!"/>
    );
}
class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {
            login: ''
        };
    }
    handleChange(e){
        this.setState({
            login: e.target.value
        })
    }
    handleSignUp(){
        alert(`Welecome aboard, ${this.state.login}!`);
    }
    render() {
        return (
            <Dialog 
                title="Mas Exploration Program"
                message="How should we refer to you?">
                <input 
                    value={this.state.login}
                    onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        )
    }
}

function Contacts(){
    return (
        <div>Contacts</div>
    )
}
function Chat(){
    return (
        <div>Chat</div>
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

class Practice extends React.Component {
    render() {
        let tags = ['111','222','333'];
        return (
            <div style={{padding: '10px 0 0 10px'}}>
               <Li/>
               <hr/>
               <NameCard name="zhao" number={123412341234} isHuman tags={tags}/>
               <hr/>
               <WelecomeDialog/>
               <hr/>
               <SplitPane 
                    left={
                        <Contacts />
                    }
                    right={
                        <Chat />
                    }
               />
               <hr/>
               <SignUpDialog/>
            </div>
        )
    }
}   

export default Practice