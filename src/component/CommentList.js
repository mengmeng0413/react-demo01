import React from 'react'

const text = {
    display: 'inline-block',
    width: '200px'
}

class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    clearList(index){
        this.props.onclearComment(index)
    }
    render(){
        const comments = this.props.comments
        return (
            <div>
                <label>评论列表</label>
                <ul>
                    {
                        comments.map((comment, index) => 
                            <li key={index}>
                                <span style={text}>{comment}</span>
                                <span style={{cursor: 'pointer'}} onClick={()=>{this.clearList(index)}}>X</span>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
    
}

export default CommentList