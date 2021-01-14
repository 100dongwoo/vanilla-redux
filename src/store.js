import { createStore } from 'redux';
//
// const ADD = 'ADD';
// const DELETE = 'DELETE';
//
// export const addToDo = (text) => {
//     return {
//         type: ADD,
//         text,
//     };
// };
// export const deleteTodo = (id) => {
//     return {
//         type: DELETE,
//         id: parseInt(id),
//     };
// };
// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case ADD:
//             return [{ text: action.text, id: Date.now() }, ...state];
//         case DELETE:
//             return state.filter((toDo) => toDo.id !== action.id);
//         default:
//             return state;
//     }
// };
// const store = createStore(reducer);
//
// export const actionCreators = { addToDo, deleteTodo };
// export default store;
//
//
//
//
//        ----------이 아래 문장은 REDUX toolkit ------------
import {
    configureStore,
    createAction,
    createReducer,
    createSlice,
} from '@reduxjs/toolkit';

const ADD = 'ADD';
const DELETE = 'DELETE';

// const addToDo = createAction('ADD');
// const deleteTodo = createAction('DELETE');

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteTodo.type:
//             return state.filter((toDo) => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// };
// const addToDo = createAction('ADD');
// const deleteTodo = createAction('DELETE');
//
// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteTodo]: (state, action) => {
//         return state.filter((toDo) => toDo.id !== action.payload);
//     },
// }); // 초기값
const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => {
            return state.filter((toDo) => toDo.id !== action.payload);
        },
    },
});
const store = configureStore({ reducer: toDos.reducer });
// const store = createStore(reducer);

// export const actionCreators = { addToDo, deleteTodo };

export const { add, remove } = toDos.actions;
export default store;
