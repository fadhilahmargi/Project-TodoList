// program untuk menampilkan tampilan satu tugas dalam daftar (to-do list) beserta ikon-ikon yang memungkinkan pengguna untuk mengedit, menandai selesai, dan menghapus tugas tersebut. 

import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons' //icon pensil
import {faTrash} from '@fortawesome/free-solid-svg-icons' // icon sampah

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed':""}`}>{task.task}</p>
        <div>
          {/* utk edit */}
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
          {/* utk hapus   */}
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}

// note 
// Fungsi toggleComplete berfungsi untuk menandai tugas sebagai selesai atau belum selesai. 
