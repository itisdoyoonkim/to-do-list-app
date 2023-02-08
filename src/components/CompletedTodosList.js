// react library
import React from 'react';
import { useContext } from 'react';

// context
import { TodoContext } from '../context/TodoContext';

// style
import styles from '../css/CompletedTodosList.module.css';

export default function CompletedTodosList() {
  const { todos } = useContext(TodoContext);

  return (
    <section className={styles['completed-todo-section']}>
      {todos.filter((todo) => {
        return todo.completed !== false;
      }).length > 0 ? (
        <>
          <h2>yay. you got this much done.</h2>
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
        ''
      )}
    </section>
  );
}
