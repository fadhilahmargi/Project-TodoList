// program untuk menampilkan daftar tugas (to-do list) beserta form untuk menambah dan mengedit tugas
import React, {useState} from 'react';
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
  //awal diinisialisasi dg array kosong => utk menyimpan daftar tugas
    const [todos, setTodos] = useState([])

  // fungsi manipulasi
      // utk menerima teks tugas baru
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo,
        completed: false, isEditing: false}])
    }
      // utk menerima id dari tugas yg ingin ditandai selesai atau belum selesai
    const toggleComplete = (id) => {
      setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

      // menerima id dari tugas yg ingin dihapus
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    }

      // menerima id dari tugas yg ingin diedit
    const editTodo = (id) => {
      setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

      // menerima teks tugas baru dan id yg diedit
    const editTask = (task, id) => {
      setTodos(todos.map((todo) => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
        <TodoForm addTodo={addTodo} />
        {/* display todos */}
        {todos.map(((todo) => 
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
          )
        ))}
    </div>
  )
}
