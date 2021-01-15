import { createButton } from './components/lamp/lamp.js';
import { createPost } from './components/createPost/post.js'
const btnRoot = document.querySelector('#lamp');
const postRoot = document.querySelector('#post-wrap')


// createButton(btnRoot, 'red', 3000);



const getNumber = (minValue = 500, maxValue = 5000) => {
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    return randomNumber;
};

const col = ['red', 'yellow', 'green', 'blue',
    'orange', 'brown', 'purple', 'aqua',
    'burlywood', 'darkgoldenrod', 'fuchsia',
    'cornflowerblue', 'orangered', 'darkred',
    'lime', 'teal', 'navy', 'indigo',
    'mediumvioletred', 'oldlace'];

const christmasLights = (count = 20) => {
    for (let i = 0; i < count; i++) {
        createButton(btnRoot, col[i], getNumber(), 100);
    }
}
christmasLights();

createPost(postRoot, 'Hello', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quidem sequi aspernatur accusamus ab, corporis hic nemo exercitationem sit. Hic nostrum repellat dolorem libero placeat vel fuga, esse eos sed.');
