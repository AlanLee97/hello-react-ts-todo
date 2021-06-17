import React from 'react';

import './App.css';
import TodoPage from './views/todo/TodoPage';
import TodoHeader from './components/todo-header/TodoHeader';

function App() {
  return (
    <div className="App">
      <TodoHeader></TodoHeader>
      <TodoPage></TodoPage>
    </div>
  );
}

export default App;
