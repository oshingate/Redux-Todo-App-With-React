import { createStore } from 'redux';

function reducer(
  state = {
    data: [{ isCompleted: true, title: 'Learn HTML' }],
  },
  action
) {
  let newArray = [...state.data];
  switch (action.type) {
    case 'addTodo':
      newArray = state.data.concat(action.payload);

      return { data: newArray };

    case 'handleChecked':
      console.log('clicked');
      newArray[action.payload.index].isCompleted = !action.payload.value;
      console.log(newArray);
      return { data: newArray };

    case 'deleteTodo':
      newArray.splice(action.payload, 1);

      return { data: newArray };

    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
