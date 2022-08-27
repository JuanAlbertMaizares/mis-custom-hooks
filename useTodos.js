import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

// funcion que carga lo que esta almacenado en el navegador en LS, cuadno el compo se carga es llamado.
const init =  () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init ); 
    // cada vez que el estado 'todos' cambie, graba ese estado en LS.
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    // manejador de las nuevas tareas que se crean.
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);    
    }
    const handleDeleteTodo = (id) => {
        dispatch({
            type:'[TODO] Remove Todo',
            payload: id
        });
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type:'[TODO] Toggle Todo',
            payload: id
        });
    }
    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount:todos.filter(todo => !todo.done).length,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
    }
}
