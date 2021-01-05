import { createStore } from 'redux';

const minus = document.getElementById('minus');
const add = document.getElementById('add');
const number = document.querySelector('span');

const ADD = 'ADD';
const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
};
number.innerText = 0;
const countStore = createStore(countModifier);
const handleAdd = () => {
    countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
    countStore.dispatch({ type: MINUS });
};

const onChange = () => {
    number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
