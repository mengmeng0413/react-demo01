import React from 'react'
import NameCard from '../NameCard'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

const route = {
    cursor: 'pointer'
}

function NumList(props) {
    const numberList = props.number.map((num) =>
        <li key={num}>{num}</li>
    )
    return numberList;
}
class Li extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: [1, 2, 3, 4, 5]
        }
    }
    render() {
        return (
            <div style={{ padding: '10px 0 0 10px' }}>
                <ul>
                    <NumList number={this.state.number} />
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
            message="Thank you for visiting our spacecraft!" />
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
    handleChange(e) {
        this.setState({
            login: e.target.value
        })
    }
    handleSignUp() {
        alert(`Welecome aboard, ${this.state.login}!`);
    }
    render() {
        return (
            <div style={{ padding: '10px 0 10px 10px' }}>
                <Dialog
                    title="Mas Exploration Program"
                    message="How should we refer to you?"
                >
                    <input
                        value={this.state.login}
                        onChange={this.handleChange} />
                    <button onClick={this.handleSignUp}>
                        Sign Me Up!
                    </button>
                </Dialog>
            </div>

        )
    }
}

function Contacts() {
    return (
        <div>Contacts</div>
    )
}
function Chat() {
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

class RouteTo extends React.Component {   //路由跳转
    constructor(props) {
        super(props);
    }
    routTo() {
        this.props.history.push({
            pathname: '/game',
            params: {
                id: 111
            }
        })
    }
    render() {
        const isTrue = false
        return (
            <div style={{ padding: '10px 0 0 10px' }}>
                {isTrue ? <span>是true</span> : <span>不是true</span>}
                <p style={route} onClick={() => { this.routTo() }}>跳转到Game</p>
            </div>
        )
    }
}

class HelloMessage extends React.Component { //this.props
    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
}

class NoteList extends React.Component {  //React.Children与this.props.children
    render() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>
                    })
                }
            </ol>
        )
    }
}

class MyTitle extends React.Component {   //PropTypes-验证组件实例的属性是否符合要求
    render() {
        return (
            <h1>
                {this.props.title}
            </h1>
        )
    }
}
MyTitle.propTypes = {
    title: PropTypes.string.isRequired
}

class MyComponent extends React.Component {  //使用ref获取DOM节点
    handleClick() {
        this.refs.myTextInput.focus();
    }
    render() {
        return (
            <div style={{ padding: '10px 0 10px 10px' }}>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={() => this.handleClick()} />
            </div>
        )
    }
}

class LikeButton extends React.Component {     //修改state的值
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
    }
    handleClick() {
        this.setState({
            liked: !this.state.liked
        })
    }
    render() {
        let text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p style={{ padding: '10px 0 10px 10px' }} onClick={() => this.handleClick()}>You {text} this. Click to toggle.</p>
        )
    }
}

class Input extends React.Component {      //表单
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello!'
        }
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    render() {
        let value = this.state.value
        return (
            <div style={{ padding: '10px 0 10px 10px' }}>
                <input type="text" value={value} onChange={(event) => this.handleChange(event)} />
                <p>{value}</p>
            </div>
        )
    }
}

class Hello extends React.Component {  //组件的生命周期
    constructor(props) {
        super(props);
        this.state = {
            opacity: 1.0
        }
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            let opacity = this.state.opacity;
            opacity -= 0.5;
            if(opacity < 0.1){
                opacity = 1.0
            }
            this.setState({
                opacity: opacity
            })
        }, 500);
    }
    render() {
        return (
            <div style={{ opacity: this.state.opacity, padding: '10px 0 10px 10px' }}>
                Hello {this.props.name}
            </div>
        )
    }
}

class TimeOut extends React.Component {   //setTimeOut
    componentDidMount(){
        let id1 = setTimeout(() => {
            console.log('test setTimeout1~')
        },3000)
        let id2 = setTimeout(() => {
            console.log('test setTimeout2~')
        },4000)
        clearTimeout(id2)
        console.log('id---', id1, id2)   //id1和2是定时器的id
    }
    render() {
        return (
            <div style={{ padding: '10px 0 0 10px' }}>
                setTimeOut
            </div>
        )
    }
}

class TryProp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            own: "this is own message"
        }
    }
    render(){
        return (
            <div>
                <p>{this.props.msg}</p>
                <p>{this.state.own}</p>
            </div>
        )
    }
}

class Practice extends React.Component {
    render() {
        let tags = ['111', '222', '333'];
        let data = 'PropTypes';
        return (
            <div style={{ padding: '10px 0 0 10px' }}>
                <Li />
                <hr />
                <NameCard name="zhao" number={123412341234} isHuman tags={tags} />
                <hr />
                <WelecomeDialog />
                <hr />
                <SplitPane
                    left={
                        <Contacts />
                    }
                    right={
                        <Chat />
                    }
                />
                <hr />
                <SignUpDialog />
                <hr />
                <RouteTo history={this.props.history} />
                <hr />
                <HelloMessage name="xiaoZhao" />
                <hr />
                <NoteList>
                    <span>hello</span>
                    <span>world</span>
                </NoteList>
                <hr />
                <MyTitle title={data} />
                <hr />
                <MyComponent />
                <hr />
                <LikeButton />
                <hr />
                <Input />
                <hr />
                <Hello />
                <hr/>
                <TimeOut />
                <hr/>
                <TryProp msg="give you msg"/>
            </div>
        )
    }
}

export default withRouter(Practice)