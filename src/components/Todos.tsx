"use client";

import { useTodos } from "@/store/todos";
import { useSearchParams } from "next/navigation";

const Todos = () => {

    const { todos, toggleCheckbox, handleDelete } = useTodos();
    const searchParams = useSearchParams();
    const filteredTodos = searchParams.get("todos");
    let filteredData = todos;

    if (filteredTodos === "active") {
        filteredData = filteredData.filter(task => !task.completed)
    } else if (filteredTodos === "completed") {
        filteredData = filteredData.filter(task => task.completed)
    }

    return (
        <ul className="main-task">
            {
                filteredData && filteredData.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" name="" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleCheckbox(todo.id)} />
                        <label htmlFor={`todo-${todo.id}`}>{todo.content}</label>
                        {
                            todo.completed && (
                                <button type="button" onClick={() => handleDelete(todo.id)}>delete</button>
                            )
                        }
                    </li>
                ))
            }
        </ul>
    )
}

export default Todos