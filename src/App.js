import { ChakraProvider } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

import { useReducer } from 'react';

import { TodoContext } from './TodoContext';
import { todosReducer } from './TodosReducer';

import Title from './components/Title';
import InputForm from './components/InputForm';
import List from './components/List';

function App() {
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
          <TodoContext.Provider value={todos}>
            <Title title='the infamous to-do list application' />
            <InputForm handleCreateNewTodo={handleCreateNewTodo} />
            <List handleChangeStatusOfTodo={handleChangeStatusOfTodo} />
          </TodoContext.Provider>
        </Container>
      </main>
    </ChakraProvider>
  );
}

export default App;
