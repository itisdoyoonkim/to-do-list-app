import { SimpleGrid } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

import uuid from 'react-uuid';

import { useState } from 'react';
import { useRef } from 'react';

import styles from '../css/InputForm.module.css';

export default function InputField({ handleCreateNewTodo }) {
  const [todo, setTodo] = useState({ id: null, detail: '', completed: null });

  const inputEl = useRef(null);

  const handleInputChange = (e) => {
    setTodo({
      id: uuid(),
      detail: e.target.value,
      completed: false,
    });
  };

  const handleSave = () => {
    handleCreateNewTodo(todo);
    setTodo({ id: null, detail: '', completed: null });
    inputEl.current.focus();
  };

  return (
    <section className={styles['inputFormSection']}>
      <SimpleGrid columns={2} spacing={5}>
        <Input
          placeholder='what do you need to do?'
          variant='flushed'
          size='md'
          value={todo.detail}
          onChange={handleInputChange}
          ref={inputEl}
          autoFocus
        />
        <button
          type='submit'
          onClick={handleSave}
          style={{ background: 'black', color: 'white' }}
        >
          save
        </button>
      </SimpleGrid>
    </section>
  );
}
