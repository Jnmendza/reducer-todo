export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NEW_TODO_ITEM':
      const newItem = {
        item: action.payload,
        completed: false,
        id: new Date()
      };
      return {
        ...state,
        item: [...state.item, newItem]
      };
            default:
                return state;
    }
}