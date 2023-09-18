import AddTodo from "@/components/AddTodo";
import { Navbar } from "@/components/Navbar";
import Todos from "@/components/Todos";

export default function Page() {
  return (
    <main>
      <h2>Todo App - Next.js & Typescript</h2>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  )
}
