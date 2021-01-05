import { createStore } from 'redux';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            const newToDoObj = { text: action.text, id: Date.now() };
            return [newToDoObj, ...state];
        case DELETE_TODO:
            return state.filter((toDo) => toDo.id !== action.id);
        default:
            return state;
    }
};
const store = createStore(reducer);
const addTodo = (text) => {
    return { type: ADD_TODO, text };
};
const deleteTodo = (id) => {
    return { type: DELETE_TODO, id };
};

const dispatchDeleteToDo = (e) => {
    e.preventDefault();
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteTodo(id));
};

const dispatchAddToDo = (text) => {
    store.dispatch(addTodo(text));
};
const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = '';
    toDos.forEach((toDo) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.addEventListener('click', dispatchDeleteToDo);
        btn.innerText = 'del';
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });
};
store.subscribe(paintToDos);

const onsubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    input.value = '';
    dispatchAddToDo(toDo);
};
form.addEventListener('submit', onsubmit);
