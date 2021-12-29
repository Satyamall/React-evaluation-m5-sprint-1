


import { loadData, saveData } from "../../Utils/localStorage";

const initState = {
  todos: loadData("todos") || []
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ADD_TODO": {
      const updatedTodo = [...state.todos, payload];
      saveData("todos", updatedTodo);
      return {
        ...state,
        todos: updatedTodo
      };
    }
    default:
      return state;
  }
};

export { reducer };
