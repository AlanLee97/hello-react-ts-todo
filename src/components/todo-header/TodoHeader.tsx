import React from "react";
import logo from '../../logo.svg';
import './style.scss';

export default function TodoHeader() {
  return (
    <div className="todo-header">
      <img src={logo} className="logo" alt="" />
      <div>
        <h2>Todo Web App</h2>
        <h4>(React + TypeScript)</h4>
      </div>
    </div>
  )
}