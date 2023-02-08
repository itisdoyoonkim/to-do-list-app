import { ChakraProvider } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

import { useReducer } from 'react';

import { TodoContext } from '../context/TodoContext';
import { todosReducer } from '../reducer/TodosReducer';

import Title from './Title';
import InputForm from './InputForm';
import List from './List';

function TodoApp() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const handleCreateNewTodo = (newTodo) => {
    dispatch({
      type: 'ADD_A_NEW_TODO',
      payload: newTodo,
    });
  };

  const handleChangeStatusOfTodo = (todoId) => {
    dispatch({
      type: 'CHANGE_STATUS_OF_TODO',
      payload: todoId,
    });
  };

  return (
    <ChakraProvider>
      <main className='App'>
        <Container>
          <TodoContext.Provider
            value={{ todos, handleChangeStatusOfTodo, handleCreateNewTodo }}
          >
            <Title title='the infamous to-do list application' />
            <InputForm />
            <List handleChangeStatusOfTodo={handleChangeStatusOfTodo} />
          </TodoContext.Provider>
        </Container>
      </main>
    </ChakraProvider>
  );
}

export default TodoApp;
