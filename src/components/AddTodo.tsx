"use client";

import { FormEvent, useState } from 'react';
import { useTodos } from '@/store/todos';

const AddTodo = () => {
    const [ todo, setTodo ] = useState("");
    const { addTodo } = useTodos();

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(todo);
        setTodo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" value={todo} placeholder='' onChange={(e) => setTodo(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodo