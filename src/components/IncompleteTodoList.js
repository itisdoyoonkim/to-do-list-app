import React from 'react';
import { useContext } from 'react';

import { TodoContext } from '../TodoContext';

import styles from '../css/List.module.css';

export default function IncompleteTodoList({ handleChangeStatusOfTodo }) {
  const todos = useContext(TodoContext);

  const handleCheckboxStatusChange = (todoId) => {
    handleChangeStatusOfTodo(todoId);
  };

  return (
    <section>
      {todos.length ? (
        <ul className={styles['list']}>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type='checkbox'
                  id={todo.detail}
                  name={todo.detail}
                  value={todo.detail}
                  onChange={() => handleCheckboxStatusChange(todo.id)}
                />
                <label
                  htmlFor={todo.detail}
                  className={
                    todo.completed
                      ? styles['completed']
                      : styles['not-completed']
                  }
                >
                  {todo.detail}
                </label>
              </li>
            );
          })}
        </ul>
      ) : (
        'Nothing to do..'
      )}
    </section>
  );
}
