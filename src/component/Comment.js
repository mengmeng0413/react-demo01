import React from 'react'
import CommentList from './CommentList'
import CommentBox from './CommentBox'

class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: ['this is my first reply']
        }
    }
    addComment(comment){
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }
    clearComment(index){
        let arr = this.state.comments;
        arr.splice(index,1);
        this.setState({
            comments: arr
        })
    }
    render(){
        const { comments } = this.state
        return (
            <div>
                <CommentList 
                    comments={comments}
                    onclearComment = {(index) => this.clearComment(index)}
                />
                <CommentBox 
                    messageLength={comments.length}
                    onAddComment={(comment) => {this.addComment(comment)}}
                />
            </div>
        )
    }
}

export default Comment