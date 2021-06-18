import { ITodoItem } from "../interfaces"

interface IState {
  todoList: ITodoItem[]
}

interface IAction {
  type: string;
  value: any;
}

const initState: IState = {
  todoList: [
    {id: 1, title: '起床', content: '7:00 起床', isDone: true},
    {id: 2, title: '刷牙', content: '7:10 刷牙', isDone: false},
    {id: 3, title: '早餐', content: '7:40 吃早餐', isDone: false},
    {id: 4, title: '上班', content: '8:00 上班', isDone: false},
  ]
}


export default function reducer(state = initState, action: IAction) {
  console.log('exec->reducer  action', action);
  let _state = JSON.parse(JSON.stringify(state));
  if(action.type === 'addTodo') {
    _state.todoList.push(action.value);
  }

  return _state;
}