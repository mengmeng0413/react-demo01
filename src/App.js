import React,{ Component } from 'react';
import {Route,Link} from "react-router-dom"
import router from './router/router';
import "./App.less";
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined';
import AvTimerOutlinedIcon from '@material-ui/icons/AvTimerOutlined';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import HealingOutlinedIcon from '@material-ui/icons/HealingOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SnoozeOutlinedIcon from '@material-ui/icons/SnoozeOutlined';
import EmojiNatureOutlinedIcon from '@material-ui/icons/EmojiNatureOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
// import LocalFloristOutlinedIcon from '@material-ui/icons/LocalFloristOutlined';
class App extends Component {
    render() {
        return(
            <div className="wrapper">
                <ul className="left-nav">
                    <li>
                        <span className="icon"><HouseOutlinedIcon/></span>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <span className="icon"><AvTimerOutlinedIcon/></span>
                        <Link to="/welecome">welecome</Link>
                    </li>
                    <li>
                        <span className="icon"><BubbleChartOutlinedIcon/></span>
                        <Link to="/game">game</Link>
                    </li>
                    <li>
                        <span className="icon"><HealingOutlinedIcon/></span>
                        <Link to="/comment">comment</Link>
                    </li>
                    <li>
                        <span className="icon"><SentimentSatisfiedOutlinedIcon/></span>
                        <Link to="/practice">practice</Link>
                    </li>
                    <li>
                        <span className="icon"><SnoozeOutlinedIcon/></span>
                        <Link to="/boiling">boiling</Link>
                    </li>
                    <li>
                        <span className="icon"><EmojiNatureOutlinedIcon/></span>
                        <Link to="/ui">uuii</Link>
                    </li>
                    <li>
                        <span className="icon"><ColorLensOutlinedIcon/></span>
                        <Link to="/father">father</Link>
                    </li>
                </ul>
                <div className="right-content">
                    {
                        router.map((router,index) => {
                            if(router.exact){
                                return <Route exact key={index} path={router.path}
                                    render = {
                                        props =>(
                                            <router.component {...props} routes = {router.routes}/>
                                        )
                                    }
                                />
                            }else{
                                return <Route key = {index} path={router.path}
                                    render = {
                                        props =>(
                                            <router.component {...props} routes = {router.routes}/>
                                        )
                                    }
                                />
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default App;