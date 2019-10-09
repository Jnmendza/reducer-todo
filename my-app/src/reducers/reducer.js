export const initialState = {
  todoData: [
      {
          task: 'Learn about reducers',
          completed: false,
          id: 3892987589
      },
      {
          task: 'Study',
          id: 1528817073686,
          completed: false
      },
      {
          task: 'Study some more',
          id: 15288170878358,
          completed: false
      },
      {
          task: 'Grocery shopping',
          id: 152881792458,
          completed: false
      },
      {
          task: 'Get back to studying',
          id: 1528817856439,
          completed: false
      },
      {
          task: 'Go to sleep',
          id: 1528817086980,
          completed: false
      },
      
  ]
}

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
      case 'ADD_ITEM':
          const newTask = {
              task: action.payload,
              completed: false,
              id: Date.now()
          };
          return {
              ...state,
              todoData: [...state.todoData, newTask]
          }
      case 'TOGGLE_ITEM':
          return {
              ...state,
              todoData: state.todoData.map(item => {
                  if (item.id === action.payload) {
                      return { ...item, completed: !item.completed };
                  } else {
                      return item;
                  }
              })
          }
      case 'CLEAR_ITEM':
          return {
              ...state,
              todoData: state.todoData.filter(({ completed }) => !completed)
          }
      default:
          return state;
  }
};