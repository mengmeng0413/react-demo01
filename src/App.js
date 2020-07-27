import React,{ Component } from 'react';
import {Route,Link} from "react-router-dom"
import Welecome from './component/Welecome'
import Game from './component/Game';
import LikesButton from './component/LikesButton';
import DigitalClock from './component/DigitalClock';
import Comment from './component/Comment';
import Practice from './component/Practice'
class App extends Component {

    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/welecome">welecome</Link>
                    </li>
                    <li>
                        <Link to="/game">game</Link>
                    </li>
                    <li>
                        <Link to="/likesBtn">likesBtn</Link>
                    </li>
                    <li>
                        <Link to="/digitalClock">digitalClock</Link>
                    </li>
                    <li>
                        <Link to="/comment">comment</Link>
                    </li>
                    <li>
                        <Link to="/practice">practice</Link>
                    </li>
                </ul>
                <switch>
                    <Route path="/welecome" exact component={Welecome}></Route>
                    <Route path="/game" component={Game}></Route>
                    <Route path="/likesBtn" component={LikesButton}></Route>
                    <Route path="/digitalClock" component={DigitalClock}></Route>
                    <Route path="/comment" component={Comment}></Route>
                    <Route path="/practice" component={Practice}></Route>
                </switch>
            </div>
        )
    }
}

export default App;