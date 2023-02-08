// chakra library
import { SimpleGrid } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

// uuid library
import { v4 as uuid } from 'uuid';

// react library
import { useState, useRef, useContext } from 'react';

// context
import { TodoContext } from '../context/TodoContext';

// style
import styles from '../css/InputForm.module.css';

export default function InputField() {
  const [todo, setTodo] = useState({ id: null, detail: '', completed: null });
  const [alert, setAlert] = useState(null);

  const { handleCreateNewTodo } = useContext(TodoContext);

  const inputEl = useRef(null);

  const handleInputChange = (e) => {
    setTodo({
      detail: e.target.value,
      completed: false,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!todo.detail) {
      setAlert(() => {
        return 'something is misisng';
      });

      setTimeout(() => {
        setAlert(null);
      }, 2000);
      return;
    }

    todo.id = uuid();

    handleCreateNewTodo(todo);
    setTodo({ id: null, detail: '', completed: null });
    inputEl.current.focus();
  };

  return (
    <section className={styles['inputFormSection']}>
      <div className={styles['alert']}>{alert}</div>
      <form onSubmit={handleSave}>
        <Input
          placeholder='what do you need to do?'
          variant='flushed'
          size='md'
          value={todo.detail}
          onChange={handleInputChange}
          ref={inputEl}
          autoFocus
        />
        <input type='submit' value='save' className='submit-button' />
      </form>
    </section>
  );
}
