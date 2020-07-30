import React from 'react'

class LikesButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        } 
        // this.increaseLikes = this.increaseLikes.bind(this)
    }
    increaseLikes() {
        this.setState({
            likes: this.state.likes+1
        })
    }
    render() {
        return(
            <div style={{padding: '10px 0 0 10px'}}>
                <button 
                    type="button"
                    onClick={()=>{this.increaseLikes()}}
                >
                    <span role="img" aria-label="excellent">👍</span>{this.state.likes}
                </button>
            </div>
        )
    }
}
export default LikesButton