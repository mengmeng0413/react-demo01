import React from 'react'

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     value: ''
        // }
        // this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // handleChange(event){
    //     this.setState({
    //         value: event.target.value
    //     })
    // }
    handleSubmit(event){
        this.props.onAddComment(this.textInput.value)
        this.textInput.value = ''
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>留言内容：</label>
                    <input
                        type="text"
                        placeholder="请输入内容"
                        // onChange={this.handleChange}
                        // value={this.state.value}
                        ref={(textInput)=>{this.textInput = textInput}}
                    />
                    <button type="submit">留言</button>
                </div>
                <p>共有{this.props.messageLength}条留言</p>
            </form>
        )
    }
}
export default CommentBox