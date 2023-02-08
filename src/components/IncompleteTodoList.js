// react library
import React from 'react';
import { useContext } from 'react';

// context
import { TodoContext } from '../context/TodoContext';

// style
import styles from '../css/IncompleteTodoList.module.css';

export default function IncompleteTodoList({ handleChangeStatusOfTodo }) {
  const { todos } = useContext(TodoContext);

  const handleCheckboxStatusChange = (todoId) => {
    handleChangeStatusOfTodo(todoId);
  };

  return (
    <section className={styles['incomplete-to-do-list-section']}>
      {todos.length ? (
        <ul className={styles['list']}>
          <h2>here is a list of things to do:</h2>

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
        'your list is currently empty...'
      )}
    </section>
  );
}
