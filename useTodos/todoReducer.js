// funcion reducer.
export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            // throw new Error('Action.type = ABC no esta implementada.');
            return [...initialState, action.payload];
        case '[TODO] Remove Todo':
            // retornamos un nuevo arreglo, donde un id no este entre los payload, 
            //asumimos que en el payload estan los ids de los elementos.
            return initialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done

                    }
                }
                return todo;
            });

        default:
            return initialState;
    }

}

