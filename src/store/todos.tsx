"use client";

import { ReactNode, createContext, useContext, useState } from "react"

export type Todo = {
    id: string;
    content: string;
    completed: boolean;
    createdAt: Date;
}

export type TodosContext = {
    todos: Todo[];
    addTodo: (content: string) => void;
    toggleCheckbox: (id: string) => void;
    handleDelete: (id: string) => void;
}

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: { children: ReactNode }) => {

    const [todos, setTodos] = useState<Todo[]>(() => {
        const newTodos = localStorage.getItem("todos") || "[]";
        return JSON.parse(newTodos) as Todo[]
    });

    const addTodo = (content: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                content,
                completed: false,
                createdAt: new Date()
            },
            ...prev];

            localStorage.setItem("todos", JSON.stringify(newTodos));

            return newTodos;
        })
    };

    // if task is completed

    const toggleCheckbox = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed }
                }

                return task;
            });
            
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        })
    }

    // if task is deleted

    const handleDelete = (id: string) => {
        setTodos(prev => {
            const newTodos = prev.filter(task => task.id !== id);
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        })
    }

    return (
        <todosContext.Provider value={{ todos, addTodo, toggleCheckbox, handleDelete }}>
            {children}
        </todosContext.Provider>
    )
};

//context api

export function useTodos() {
    const todosContextValue = useContext(todosContext);

    if (!todosContextValue) {
        throw new Error("useTodos hook used outside provider")
    }

    return todosContextValue;
}