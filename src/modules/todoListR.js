const TODOLIST_ADDTODO = 'TODOLIST_ADDTODO';
const TODOLIST_UPDATETODO = 'TODOLIST/UPDATETODO';
const TODOLIST_DELETETODO = 'TODOLIST/DELETETODO';
const TODOLIST_CHANGETEXT = 'TODOLIST/CHANGETEXT';

let cnt = 6;
export const addAction = (txt) => {
  const todo = { id: cnt++, text: txt, done: false };
  return { type: TODOLIST_ADDTODO, payload: todo };
};
export const updateAction = (id) => ({ type: TODOLIST_UPDATETODO, payload: Number(id) });
export const deleteAction = (id) => ({ type: TODOLIST_DELETETODO, payload: id });
export const changeTextAction = (txt) => ({ type: TODOLIST_CHANGETEXT, payload: txt });

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5; i++) {
    todos.push({ id: i, text: '할 일', done: false });
  }
  return todos;
};

const init = { todoList: makeTodo(), text: '' };

const todoListR = (state = init, action) => {
  switch (action.type) {
    case TODOLIST_ADDTODO:
      return { ...state, todoList: state.todoList.concat(action.payload) };
    case TODOLIST_UPDATETODO:
      const update = state.todoList.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
      return { ...state, todoList: update };
    case TODOLIST_DELETETODO:
      const deleteList = state.todoList.filter((todo) => todo.id !== action.payload);
      return { ...state, todoList: deleteList };
    case TODOLIST_CHANGETEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default todoListR;
