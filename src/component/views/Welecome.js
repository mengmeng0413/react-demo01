import React from 'react';
import { withRouter } from 'react-router-dom';

const route = {
    cursor: 'pointer'
}
class Welecome extends React.Component{
    routerTo(){
        this.props.history.push({
            pathname: '/game',
            params:{
                id: 111
            }
        })
    }
    render() {
        const arr = ['learn', 'sing']
        const isTrue = false
        return(
            <div style={{padding: '10px 0 0 10px'}}>
                <h1>Hello React</h1>
                <span>{12+12}</span>
                <ul>
                    {
                        arr.map((item,index)=> <li key={index}>{item}</li>)
                    }
                </ul>
                {isTrue ? <span>是true</span> : <span>不是true</span> }
                <p style={route} onClick={() => {this.routerTo()}}>跳转到Game</p>
            </div>
        )
    }
}

export default withRouter(Welecome)