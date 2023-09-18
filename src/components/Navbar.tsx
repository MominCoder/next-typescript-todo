"use client";

import Link from 'next/link'
import {useSearchParams} from 'next/navigation';

export const Navbar = () => {

    const searchParams = useSearchParams();
    const filteredTodos = searchParams.get("todos");

  return (
    <nav>
        <Link href="/" className={filteredTodos === null ? "active" : ""} >All</Link>
        <Link href="/?todos=active" className={filteredTodos === "active" ? "active" : ""} >Active</Link>
        <Link href="/?todos=completed" className={filteredTodos === "completed" ? "active" : ""} >Completed</Link>
    </nav>
  )
}
