import React,{ Component } from 'react';
import Welecome from './component/Welecome'
import Game from './component/Game';
import NameCard from './component/NameCard';
import LikesButton from './component/LikesButton';
import DigitalClock from './component/DigitalClock';
import Comment from './component/Comment';
const tags = ['111','222','333'];
class App extends Component {
    render() {
        return(
            <div>
                <Welecome/><hr/>
                <Game/><hr/>
                <NameCard name="zhao" number={123412341234} isHuman tags={tags} /><hr/>
                <LikesButton/><hr/>
                <DigitalClock/><hr/>
                <Comment/><hr/>
            </div>
        )
    }
}

export default App;