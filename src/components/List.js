import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

import styles from '../css/List.module.css';

import CompletedTodosList from './CompletedTodosList';
import IncompleteTodoList from './IncompleteTodoList';

export default function List() {
  const { handleChangeStatusOfTodo } = useContext(TodoContext);

  return (
    <section className={styles['list-section']}>
      <IncompleteTodoList handleChangeStatusOfTodo={handleChangeStatusOfTodo} />
      <hr />
      <CompletedTodosList />
    </section>
  );
}
