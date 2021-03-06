import Home from '../component/views/home/Home'
import Welecome from '../component/views/Welecome'
import Game from '../component/views/Game/Game';
import Comment from '../component/views/Comment/Comment';
import Practice from '../component/views/Practice/Practice';
import Boiling from '../component/views/Boiling/Boiling';
import Ui from '../component/views/Ui/Ui';
import Father from '../component/views/Father/Father';
const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/welecome",
        component: Welecome
    },
    {
        path: "/game",
        component: Game
    },
    {
        path: "/comment",
        component: Comment
    },
    {
        path: "/practice",
        component: Practice
    },
    {
        path: "/boiling",
        component: Boiling
    },
    {
        path: "/ui",
        component: Ui
    },
    {
        path: "/father",
        component: Father
    }
    
]
export default routes