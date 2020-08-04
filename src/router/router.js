import Home from '../component/views/home/Home'
import Welecome from '../component/views/Welecome'
import Game from '../component/views/Game/Game';
import LikesButton from '../component/views/LikesButton';
import DigitalClock from '../component/views/DigitalClock';
import Comment from '../component/views/Comment/Comment';
import Practice from '../component/views/Practice/Practice';
import Boiling from '../component/views/Boiling/Boiling';
import Ui from '../component/views/Ui/Ui'
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
        path: "/likesBtn",
        component: LikesButton
    },
    {
        path: "/digitalClock",
        component: DigitalClock
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
    }
]
export default routes