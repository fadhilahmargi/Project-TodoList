// program untuk menampilkan form yang memungkinkan pengguna untuk menambahkan tugas baru ke dalam daftar (to-do list)
//alur : tugas ditambahkan, form akan dikosongkan agar pengguna dapat dengan mudah menambahkan tugas baru tanpa harus menghapus teks yang lama

import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission : form kosong saat pertama kali dirender
          setValue("")
        }
      }   

  return (
    <form className='TodoForm' onSubmit={handleSubmit}> 
        <input type='text' 
        className='todo-input' 
        value={value} 
        placeholder='What is the task today?'
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
