import React, { useMemo } from 'react';
import { useContext } from 'react';

import styles from '../css/CompletedTodosList.module.css';

import { TodoContext } from '../context/TodoContext';

export default function CompletedTodosList() {
  const { todos } = useContext(TodoContext);

  return (
    <section className={styles['completed-todo-section']}>
      {todos.filter((todo) => {
        return todo.completed !== false;
      }).length > 0 ? (
        <>
          <h3>yay. you got this much done.</h3>
          <ul className={styles['list']}>
            {todos
              .filter((todo) => {
                return todo.completed;
              })
              .map((result) => {
                return <li key={result.id}>{result.detail}</li>;
              })}
          </ul>
        </>
      ) : (
        'wow. you got nothing done...'
      )}
    </section>
  );
}
