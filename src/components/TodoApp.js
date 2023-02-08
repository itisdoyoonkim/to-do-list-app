// chakra library
import { ChakraProvider } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

// react library
import { useReducer } from 'react';

// context
import { TodoContext } from '../context/TodoContext';

// reducer
import { todosReducer } from '../reducer/TodosReducer';

// components
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
      <div className='App'>
        <Container>
          <TodoContext.Provider
            value={{ todos, handleChangeStatusOfTodo, handleCreateNewTodo }}
          >
            <Title title='the infamous to-do list application' />
            <main>
              <InputForm />
              <List handleChangeStatusOfTodo={handleChangeStatusOfTodo} />
            </main>
          </TodoContext.Provider>
        </Container>
      </div>
    </ChakraProvider>
  );
}

export default TodoApp;
