import React from 'react'

class DigitalClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({
                date: new Date()
            })
        },1000)
    }
    componentDidUpdate(curProps, curState){  //第一个参数为props,第二个参数为state
        // console.log(curState.date) 
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default DigitalClock
