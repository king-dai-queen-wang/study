import React, {useEffect} from "react";
import LogicFlow from "@logicflow/core";

export const Activiti = () => {
    const data = {
        // 节点
        nodes: [
            {
                id: 21,
                type: 'rect',
                x: 100,
                y: 200,
                text: {
                    value: '矩形节点',
                    x: 100,
                    y: 200,
                },
            },
            {
                id: 50,
                type: 'circle',
                x: 300,
                y: 400,
                text: {
                    value: '圆形节点',
                    x: 300,
                    y: 400,
                },
            },
        ],
        // 边
        edges: [
            {
                type: 'polyline',
                sourceNodeId: 50,
                targetNodeId: 21,
            },
        ],
    };
    useEffect(() => {
        // 渲染画布
        const lf = new LogicFlow({
            // 容器配置
            container: document.querySelector('#container') as HTMLElement,
            // 画布配置
            width: 700,
            height: 600,
            background: {
                color: '#F0F0F0'
            },
            grid: {
                type: 'dot',
                size: 20,
            },
            // 工具配置
            textEdit: true,
            isSilentMode: false,
            edgeType: 'line',
            snapline: true,
            // 样式配置
            style: {
                rect: {
                    radius: 6
                }
            }
        });
        lf.render(data);
    }, [])


    return <div id="container"></div>;
}