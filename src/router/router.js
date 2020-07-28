import Welecome from '../component/views/Welecome'
import Game from '../component/views/Game/Game';
import LikesButton from '../component/views/LikesButton';
import DigitalClock from '../component/views/DigitalClock';
import Comment from '../component/views/Comment/Comment';
import Practice from '../component/views/Practice'
const routes = [
    {
        path: "/welecome",
        component: Welecome,
        exact: true
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
]
export default routes