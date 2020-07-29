import React from 'react'
import NameCard from './NameCard'

function NumList(props){
    const numberList = props.number.map((num) => 
        <li key={num}>{num}</li>
    )
    return numberList;
}
class Practice extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            number: [1,2,3,4,5]
        }
    }
    render() {
        const tags = ['111','222','333'];
        return (
            <div style={{padding: '10px 0 0 10px'}}>
                <ul>
                    <NumList number={this.state.number}/>
                </ul>
                <NameCard name="zhao" number={123412341234} isHuman tags={tags}/>
            </div>
            
        )
    }
}   

export default Practice