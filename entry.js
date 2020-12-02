import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: 'react app', // app name registered
        entry: '//localhost:7100',
        render: ({ appContent, loading }) => yourRenderFunction({ appContent, loading }),
        activeRule: location => yourActiveRule(location),
    },
    {
        name: 'vue app',
        entry: { scripts: ['//localhost:7100/main.js'] },
        render: ({ appContent, loading }) => yourRenderFunction({ appContent, loading }),
        activeRule: location => yourActiveRule(location),
    },
    {
        name: 'angular app',
        entry: { scripts: ['//localhost:4102/main.js'] },
        render: ({ appContent, loading }) => yourRenderFunction({ appContent, loading }),
        activeRule: location => yourActiveRule(location),
    },
]);

start();
