import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import TodoPage from './views/todo/TodoPage';
import TodoHeader from './components/todo-header/TodoHeader';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoHeader></TodoHeader>
        <TodoPage></TodoPage>
      </div>
  
    </Provider>
  ); 
}

export default App;
