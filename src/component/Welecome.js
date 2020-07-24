import React from 'react'

class Welecome extends React.Component{
    render() {
        const arr = ['learn', 'sing']
        const isTrue = false
        return(
            <div className="my-div">
                <h1>Hello React</h1>
                <span>{12+12}</span>
                <ul>
                    {
                        arr.map((item,index)=> <li key={index}>{item}</li>)
                    }
                </ul>
                {isTrue ? <span>是true</span> : <span>不是true</span> }
            </div>
        )
    }
}

export default Welecome