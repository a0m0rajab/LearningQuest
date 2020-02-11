import { cube, foo, graph } from './firstModule.js';

graph.options = {
    color: 'blue',
    thickness: '3px'
};

graph.draw();
console.log(cube(3)); // 27
console.log(foo);