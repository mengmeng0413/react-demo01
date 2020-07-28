import React,{ Component } from 'react';
import { BrowserRouter as Router,Route,Link} from "react-router-dom"
import router from './router/router';
import "./App.css"
import m from "../src/component/material/material";
class App extends Component {
    render() {
        return(
            <div className="wrapper">
                <ul className="left-nav">
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