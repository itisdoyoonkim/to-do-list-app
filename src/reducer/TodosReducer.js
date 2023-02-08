const initState = [];

export const todosReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_A_NEW_TODO':
      return [...state, payload];
    case 'CHANGE_STATUS_OF_TODO':
      return state.map((todo) => {
        if (todo.id === payload) {
          // todo.completed = !todo.completed;

          // But this works?
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};
