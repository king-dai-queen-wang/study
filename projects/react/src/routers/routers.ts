import {Home} from "../pages/home/Home";
import {Test} from "../pages/home/test/Test";
import {Game} from "../pages/games/components/game/Game";
import {Clock} from "../pages/clock/Clock";
import {RouterModel} from "../model";
import Todo from "../components/todos/Todo";
import {Antd} from "../pages/antd/Antd";
import {Activiti} from "../pages/activiti/Activiti";
import '@logicflow/core/dist/style/index.css';
export const routers: RouterModel[] = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: 'test',
                name: 'test',
                component: Test
            }
        ]
    }, {
        path: '/game',
        name: 'game',
        component: Game,
    }, {
        path: '/clock',
        name: 'clock',
        component: Clock,
    }, {
        path: '/todo',
        name: 'todo',
        component: Todo,
    }, {
        path: '/antd',
        name: 'antd',
        component: Antd,
    }, {
        path: '/activiti',
        name: 'activiti',
        component: Activiti,
    }
];
